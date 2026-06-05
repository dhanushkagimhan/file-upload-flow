export interface UploadProgressEvent {
  step: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
}