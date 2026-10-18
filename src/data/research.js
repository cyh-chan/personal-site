// Research Experience
const data = [
  {
    title: 'Regime-Aware Statistical Learning for Financial Markets',
    subtitle: 'with Dr. Fan Zengyan',
    // url: '',
    highlights: [
      'Developing a regime-aware statistical learning framework to characterize heterogeneous asset-price responses to exogenous macroeconomic shocks under structural breaks and time-varying dependence.',
      'Integrating high-frequency financial observations with macroeconomic state variables to model non-linear interactions, evolving dependence structures, and regime-dependent transmission mechanisms.',
      'Investigating adaptive feature representations and statistical learning methodologies to characterize cross-asset response heterogeneity and improve inference under non-stationary market conditions.',
    ],
  },
  {
    title: 'Stratified Non-Attendance Modeling in Clinical Datasets',
    subtitle: 'with Dr. Fan Zengyan',
    // url: '',
    highlights: [
      'Developing a unified statistical framework integrating survival analysis, generalized linear models, and robust inferential procedures to characterize heterogeneous non-attendance mechanisms.',
      'Incorporating heteroscedasticity-consistent covariance estimation, cluster-robust inference, and non-parametric variance decomposition to accommodate correlated observations and heterogeneous variability.',
      'Investigating demographic, behavioral, and temporal determinants of non-attendance through stratified estimation and model diagnostics, emphasizing inferential robustness across heterogeneous subpopulations.',
    ],
  },
  {
    title: 'Causal Machine Learning for Heterogeneous Treatment Effects',
    subtitle: 'with Dr. Fan Zengyan',
    // url: '',
    highlights: [
      'Developed a unified causal learning framework integrating Double Machine Learning and Causal Forests to estimate conditional average treatment effects in high-dimensional observational settings.',
      'Implemented cross-validated propensity score estimation, overlap diagnostics, and deterministic support trimming to improve estimation stability under limited covariate overlap.',
      'Applied unsupervised clustering to individualized treatment effect estimates to identify latent responder profiles and characterize heterogeneity in treatment responses.',
      'Constructed interpretable treatment assignment strategies using Optimal Policy Trees, linking heterogeneous effect estimation with individualized policy optimization.',
    ],
  },
  {
    title: 'Multivariate Time Series Forecasting for Equity Price Prediction',
    subtitle: 'with Dr. Zhou Tianyi',
    // url: '',
    highlights: [
      'Conducted a systematic empirical benchmark of classical statistical models and neural forecasting architectures under non-stationary, high-noise financial conditions.',
      'Evaluated ARIMA, ARIMAX, LSTM, N-HiTS, PatchTST, and StemGNN using walk-forward validation across multiple forecasting horizons to assess out-of-sample predictive performance.',
      'Investigated horizon-dependent model performance and the contribution of exogenous information through feature attribution analysis and comparative model evaluation.',
      'Established that parsimonious statistical models outperform more complex architectures at shorter horizons, while neural models exhibit stronger predictive performance over longer horizons.',
    ],
  },
  {
    title: 'Data-Driven Framework for Enhancing Supply Chain Resilience',
    subtitle: 'with Dr. Liu Ning',
    // url: '',
    highlights: [
      'Developed an end-to-end non-parametric learning framework for stochastic inventory control, integrating predictive representation learning with direct replenishment policy optimization.',
      'Formulated a decision-focused learning approach based on empirical risk minimization, circumventing explicit demand distribution modeling and conventional Predict-Then-Optimize pipelines.',
      'Incorporated feature attribution methodologies to investigate learned decision policies and quantify the influence of operational variables on replenishment decisions.',
      'Demonstrated improved inventory performance and robustness to distributional shift through systematic evaluation against conventional forecasting-based optimization baselines.',
    ],
  },
];

export default data;
