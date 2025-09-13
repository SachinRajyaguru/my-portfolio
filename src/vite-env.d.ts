/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_PROFILE_URL: string;
  readonly VITE_LINKEDIN_PROFILE_URL: string;
  readonly VITE_RESUME_PROFILE_URL: string;
  readonly VITE_LEETCODE_PROFILE_URL: string;
  readonly VITE_MEDIUM_PROFILE_URL: string;
  readonly VITE_YOUTUBE_PROFILE_URL: string;
  readonly VITE_HUGGING_FACE_PROFILE_URL: string;
  readonly VITE_KAGGLE_PROFILE_URL: string;
  readonly VITE_STACK_OVERFLOW_PROFILE_URL: string;
  readonly VITE_X_TWITTER_PROFILE_URL: string;

  // You can also keep the built-in ones if you want
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
