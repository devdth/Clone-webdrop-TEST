
import requests
import sys
import os
from datetime import datetime

class SpocketAPITester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        print(f"Response: {response.json()}")
                    except:
                        print(f"Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                if response.content:
                    try:
                        print(f"Error: {response.json()}")
                    except:
                        print(f"Error: {response.text[:100]}...")

            return success, response

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api",
            200
        )

    def test_status_check_post(self):
        """Test creating a status check"""
        client_name = f"test_client_{datetime.now().strftime('%H%M%S')}"
        return self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data={"client_name": client_name}
        )

    def test_status_check_get(self):
        """Test getting status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

def main():
    # Get backend URL from environment variable
    backend_url = os.environ.get('REACT_APP_BACKEND_URL', 'https://afa19d50-7909-4ebb-9bea-e72b2f2ec514.preview.emergentagent.com')
    
    print(f"Testing backend API at: {backend_url}")
    
    # Setup tester
    tester = SpocketAPITester(backend_url)
    
    # Run tests
    tester.test_root_endpoint()
    tester.test_status_check_post()
    tester.test_status_check_get()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
