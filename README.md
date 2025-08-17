# Heart_Disease_Prediction_model_2

A full-stack web application for predicting heart disease using machine learning. This project integrates an Angular frontend, Flask backend, MySQL database, and model training powered by FLAML's AutoML. It automatically selects and stores the best-performing model for deployment and further use.

## 🚀 Features

- 🔍 Uses FLAML for automated ML model selection (KNN, SVC, XGBoost, Random Forest).
- 🧠 Trains on MySQL-sourced data using a configurable `config.ini` setup.
- 💾 Saves all trained models to a model registry using `joblib`.
- 🌐 Modern Angular-based frontend for user interaction.
- 🔧 Flask backend for API communication and model inference.

## 🛠️ Tech Stack

- **Frontend:** Angular
- **Backend:** Flask
- **Database:** MySQL
- **ML Engine:** FLAML, Scikit-learn
- **Storage:** joblib-based model registry

## 🧪 Model Training

The training logic:
- Connects to MySQL using `config.ini`
- Loads and splits data
- Tunes multiple models using FLAML
- Saves the best model based on validation accuracy



