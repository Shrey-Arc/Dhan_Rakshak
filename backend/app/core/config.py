from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8', extra='ignore')

    app_name: str = 'DhanRakshak BFF API'
    environment: str = 'development'
    database_url: str = 'sqlite:///./dhanrakshak.db'
    jwt_secret: str = 'change-me-in-production'
    jwt_algorithm: str = 'HS256'
    access_token_expire_minutes: int = 30
    refresh_token_expire_days: int = 30
    cors_origins: str = 'http://localhost:3000'
    rate_limit_per_minute: int = 120


settings = Settings()
