class AudioProcessor {
  loadAudio(file: string): void {
    console.log(`Loading audio file: ${file}`);
  }
}

class VideoProcessor {
  loadVideo(file: string): void {
    console.log(`Loading video file: ${file}`);
  }
}

class Encoder {
  encodeFile(file: string): void {
    console.log(`Encoding file: ${file}`);
  }
}

class FileProcessorFacade {
  private audioProcessor: AudioProcessor;
  private videoProcessor: VideoProcessor;
  private encoder: Encoder;

  constructor() {
    this.audioProcessor = new AudioProcessor();
    this.videoProcessor = new VideoProcessor();
    this.encoder = new Encoder();
  }

  processAudio(file: string): void {
    this.audioProcessor.loadAudio(file);
    this.encoder.encodeFile(file);
  }

  processVideo(file: string): void {
    this.videoProcessor.loadVideo(file);
    this.encoder.encodeFile(file);
  }
}

// Example usage
const fileProcessor = new FileProcessorFacade();
fileProcessor.processAudio("song.mp3");
fileProcessor.processVideo("movie.mp4");
