from playwright.sync_api import sync_playwright

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page
        print("Navigating to home page...")
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="verification/home.png")
        print("Home page screenshot saved.")

        # Navigate to Marketplace
        print("Navigating to Marketplace...")
        page.click("text=Marketplace")
        page.wait_for_timeout(2000) # Wait for animation
        page.screenshot(path="verification/marketplace.png")
        print("Marketplace screenshot saved.")

        # Navigate to PC Builder
        print("Navigating to PC Builder...")
        page.click("text=Rakit PC AI")
        page.wait_for_timeout(2000)
        page.screenshot(path="verification/builder.png")
        print("PC Builder screenshot saved.")

        # Navigate to Pricing
        print("Navigating to Pricing...")
        page.click("text=Cek Harga")
        page.wait_for_timeout(2000)
        page.screenshot(path="verification/pricing.png")
        print("Pricing screenshot saved.")

        # Test Chatbot
        print("Testing Chatbot...")
        # Close mobile menu if open (on large screen it shouldn't be, but good practice)
        # Click the chat button
        page.click("button >> nth=-1") # Assuming the last button is the FAB or search for icon
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/chatbot.png")
        print("Chatbot screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify_site()
