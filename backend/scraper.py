from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.by import By
import pandas as pd
import time


DATE_CONVERT = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "Jun":6, "Jul":7, "Aug":8, "Sep":9, "Sept":9, "Oct":10, "Nov":11, "Dec":12}

def scrape_site(politician_id):
    # Setup Chrome options
    options = Options()
    options.add_argument("--headless")  # Run in headless mode
    options.add_argument("--window-size=1920,1080")

    # Setup the Service with correct path
    service = Service()  # <-- Adjust path if needed
    driver = webdriver.Chrome(service=service, options=options)

    # Navigate to the page
    url = 'https://www.capitoltrades.com/politicians/P000197?page='

    # Scrape trade transactions
    trades = []
    page = 1

    end = False
    while not end:
        driver.get(url + str(page))
        time.sleep(5)  # Allow time for the page and JS to load

        transaction_rows = driver.find_elements(By.TAG_NAME, "tr")
        for row in transaction_rows:
            try:
                cols = row.find_elements(By.TAG_NAME, "td")

                if cols == None or len(cols) == 0:
                    continue

                if "No results." in cols[0].text.strip():
                    end = True
                    break

                for i in range(len(cols)-1):
                    cols[i] = cols[i].text.replace("\n", " ")

                    if (i == 0):
                        cols[i] = cols[i].split(" ")[-1].split(":")[0]
                    elif (i == 1 or i == 2):
                        split_date = cols[i].split(" ")
                        split_date[1] = str(DATE_CONVERT[split_date[1]])
                        split_date[0], split_date[1] = split_date[1], split_date[0]
                        cols[i] = '/'.join(split_date)
                    elif (i == 3):
                        cols[i] = cols[i].split(" ")[1]
                    elif (i == 5):
                        cols[i] = cols[i].replace("K", "000")
                        cols[i] = cols[i].replace("M", "000000")
                        cols[i] = cols[i].replace(" ", "")
                
                if cols[0] != "N/A" and "RECEIVE" not in cols[4] and "EXCHANGE" not in cols[4]:
                    trades.append({"Ticker":cols[0], "Published":cols[1], "Traded":cols[2], "Filed_After":cols[3], "Action":cols[4], "Amount":cols[5]})
            except:
                print("An error occurred while evaluating a row. Skipping.")
                pass

        page += 1

    # Done scraping
    driver.quit()

    # Output results
    return pd.DataFrame(trades)