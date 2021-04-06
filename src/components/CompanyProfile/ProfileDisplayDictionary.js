const ProfileDisplay = [
  {
    name: "AnalystTargetPrice",
    displayName: "Analyst Target Price",
    definition: "Price at which an analyst believes a stock to be fairly valued relative to its projected and historical earnings. When an analyst raises their price target for a stock, they generally expect the stock price to rise.\nTarget prices heavily rely on valuation multiples, such as price/earnings (P/E), price/book (P/B), and price/sales (P/S).",
    currency: true,
    date: false,
    percentage: false,
  },{
    name: "52WeekHigh",
    displayName: "52 Week High",
    definition: 
    "The 52-week high/low is the highest and lowest price at which a security, such as a stock, has traded over the prior 52-week period. It is a measure used by investors to analyze a stock's current price and help predict its future movements",
    currency: true,
    date: false,
    percentage: false,
  },

  {
    name: "52WeekLow",
    displayName: "52 Week Low",
    definition: 
    "The 52-week high/low is the highest and lowest price at which a security, such as a stock, has traded over the prior 52-week period. It is a measure used by investors to analyze a stock's current price and help predict its future movements",
    currency: true,
    date: false,
    percentage: false,
  },
  {
    name: "50DayMovingAverage",
    displayName: "50 Day Moving Average",
    definition: "50-day moving average is equal to the average price that all investors have paid to obtain the asset over the past 50 days",
    currency: true,
    date: false,
    percentage: false,
  },
  {
    name: "200DayMovingAverage",
    displayName: "200 Day Moving Average",
    definition: "200-day moving average represents the average price over the past 200 days, which is used to suggest a relatively cheap price compared to the price range over most of the past year.  Once the price falls below this average, it may act as resistance because individuals who have already taken a position may consider closing the position to ensure that they do not suffer a large loss.",
    currency: true,
    date: false,
    percentage: false,
  },
  {
    name: "EPS",
    displayName: "Earnings Per Share",
    definition: "Earnings per share (EPS) is a company's net profit divided by the number of common shares it has outstanding. EPS indicates how much money a company makes for each share of its stock, and is a widely used metric to estimate corporate value.",
    currency: true,
    date: false,
    percentage: false,
  },
  {
    name: "BookValue",
    displayName: "Book Value",
    definition: "The book value of a stock is theoretically the amount of money that would be paid to shareholders if the company was liquidated and paid off all of its liabilities. As a result, the book value equals the difference between a company's total assets and total liabilities.",
    currency: true,
    date: false,
    percentage: false,
  },
  {
    name: "Country",
    displayName: "Country",
    definition: "",
    currency: false,
    date: false,
    percentage: false,
  },
  {
    name: "DilutedEPSTTM",
    displayName: "Diluted EPS/TTM",
    definition: "Diluted earnings per share (diluted EPS) is essentially the earnings made on every share of a public company that is calculated assuming that all the securities that are convertible were duly exercised. Instead of taking only the existing common stock into consideration, Diluted Earnings Per Share assumes that all the securities including convertible bonds, convertible preferred shares, stock options, warrants as well as other things, which can be altered into common stock is altered actually. \nDiluted EPS is important for shareholders simply because it lays down the earnings that a shareholder would get in the worst of the scenarios. \nTTM stands for Trailing Twelve Month",
    currency: false,
    date: false,
    percentage: false,
  },
  {
    name: "DividendDate",
    displayName: "Last Dividend Date",
    definition: "Date the last dividend was paid out.\nA dividend is the distribution of some of a company's earnings to a class of its shareholders, as determined by the company's board of directors.",
    currency: false,
    date: true,
    percentage: false,
  },
  {
    name: "DividendPerShare",
    displayName: "Dividend Per Share",
    definition: "The sum of declared dividends issued by a company for every ordinary share outstanding.",
    currency: true,
    date: false,
    percentage: false,
  },
  {
    name: "DividendYield",
    displayName: "DividendYield",
    definition: "The dividend yield, expressed as a percentage, is a financial ratio (dividend/price) that shows how much a company pays out in dividends each year relative to its stock price. \nThe dividend yield measures how much income has been received relative to the share price; a higher yield is more attractive, while a lower yield can make a stock seem less competitive relative to its industry.",
    currency: false,
    date: false,
    percentage: true,
  },
  {
    name: "",
    displayName: "",
    definition: "",
    currency: false,
    date: false,
    percentage: false,
  },
  {
    name: "Beta",
    displayName: "Beta",
    definition: "Beta measures the responsiveness of a stock's price to changes in the overall stock market. On comparison of the benchmark index for e.g. NSE Nifty to a particular stock returns, a pattern develops that shows the stock's openness to the market risk. \nFor example, if a stock's beta value is 1.3, it means, theoretically this stock is 30% more volatile than the market.'\nBy multiplying the beta value of a stock with the expected movement of an index, the expected change in the value of the stock can be determined. For example, if beta is 1.3 and the market is expected to move up by 10%, then the stock should move up by 13% (1.3 x 10).",
    currency: true,
    date: false,
    percentage: false,
  },
];

export default ProfileDisplay;
