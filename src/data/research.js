// Research Experience

const data = [
  {
    title: 'Multivariate Time Series Forecasting for Equity Price Prediction',
    subtitle: 'w/ Dr. Zhou Tianyi',
    // url: '',
    startDate: '2025-01-01',
    endDate: '2025-11-30',
    // summary: `Insert
    // text.`,
  highlights: [
    'Designed and executed a three-tiered forecasting framework to predict multi-horizon stock returns (1, 5, 20-day) for a diverse portfolio of NYSE-listed equities representing various market sectors.',
    'Benchmarked a suite of classical (ARIMA), deep learning (LSTM), and modern Transformer-based (PatchTST, N-HiTS) models in both univariate and multivariate settings to evaluate the impact of exogenous features.',
    'Engineered a robust feature selection pipeline using an ensemble of XGBoost-based methods (Recursive Feature Elimination, Permutation Importance) and feature stability analysis to identify the most predictive technical indicators.',
    'Implemented Explainable AI (XAI) techniques using SHAP (SHapley Additive exPlanations) to interpret the complex multivariate models, providing clear insights into how specific market indicators drive predictions.',
    'Validated model performance using a rigorous walk-forward backtesting framework over a one-year period, assessing aggregated metrics to ensure sector-agnostic robustness.',
  ],
  },
  {
    title: 'Data-Driven Framework for Enhancing Supply Chain Resilience',
    subtitle: 'w/ Dr. Liu Ning',
    // url: '',
    startDate: '2024-11-01',
    endDate: '2025-08-31',
    // summary: `Insert
    // text.`,
  highlights: [
    'Engineered and benchmarked two end-to-end (E2E) deep learning models, a Deep Convolutional Neural Network (DCNN) and a Multi-Quantile Recurrent Neural Network (MQRNN), for inventory optimization.',
    'Demonstrated superior performance of the E2E models, which outperformed the traditional Predict-Then-Optimize (PTO) framework and heuristic policies (Fixed-Order-Quantity, Order-Up-To) in total cost reduction.',
    'Developed a synthetic data generator to simulate realistic inventory dynamics with stochastic demand and lead times across multiple SKUs and stores, creating a robust environment for model training and evaluation.',
    'Implemented a DCNN with dilated temporal convolutions to capture long-range dependencies and an MQRNN to generate probabilistic demand forecasts, enhancing decision-making under uncertainty.',
    'Authored a comprehensive 39-page final technical report detailing the research methodology, model architectures, and quantitative results, and delivered monthly progress presentations to the research team.',
  ],
  },
];

export default data;