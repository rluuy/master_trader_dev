import pandas as pd

# List the file names for the three traders.
files = [
    'MarjorieTaylorGreene.csv',
    'JohnFetterman.csv',
    'NancyPelosi.csv'
]

# Read and combine the CSV files. (Assumes they share the same structure.)
df_list = [pd.read_csv(f) for f in files]
df_all = pd.concat(df_list, ignore_index=True)

# Normalize the 'Ticker' column to ensure matching works correctly.
df_all['Ticker'] = df_all['Ticker'].str.strip().str.upper()

# Define a larger list of safe index funds tickers.
safe_index_funds = [
    'SPY',  # S&P 500 ETF Trust
    'VOO',  # Vanguard S&P 500 ETF
    'IVV',  # iShares Core S&P 500 ETF
    'VTI',  # Vanguard Total Stock Market ETF
    'IWM',  # iShares Russell 2000 ETF
    'DIA',  # SPDR Dow Jones Industrial Average ETF Trust
    'SCHB', # Schwab U.S. Broad Market ETF
    'IWV',  # iShares Russell 3000 ETF
    'SPLG', # SPDR Portfolio S&P 500 ETF
    'RSP'   # Invesco S&P 500 Equal Weight ETF
]

# Ensure safe_index_funds are uppercase
safe_index_funds = [ticker.upper() for ticker in safe_index_funds]

print(df_all['Ticker'].unique())

df_all['Ticker'] = df_all['Ticker'].str.strip().str.upper()
safe_index_funds = [ticker.upper() for ticker in safe_index_funds]


# Create MarkTosi's data: only safe index fund trades.
df_marktosi = df_all[df_all['Ticker'].isin(safe_index_funds)]
df_marktosi.to_csv('./marktosi.csv', index=False)
print("Created file: MarkTosi.csv")

# Create Chicken's data: only Nvidia trades.
df_chicken = df_all[df_all['Ticker'] == 'NVDA']
df_chicken.to_csv('./chicken.csv', index=False)
print("Created file: Chicken.csv")
