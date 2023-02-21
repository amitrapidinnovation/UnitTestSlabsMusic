import { Injectable } from "@nestjs/common";

@Injectable()
export class SlabsMusicService {
  slabsMusics: string[] = [];

  createSlabsMusic(slabsMusic: string) {
    if (slabsMusic.length > 100) {
      throw new Error(`slabsMusic too long`);
    }
    this.slabsMusics.push(slabsMusic);
    return slabsMusic;
  }

  updateSlabsMusic(slabsMusic: string, id: number) {
    const slabsMusicToUpdate = this.slabsMusics[id];
    if (!slabsMusicToUpdate) {
      throw new Error(`This slabsMusic does not exist`);
    }
    if (slabsMusic.length > 100) {
      throw new Error(`SlabsMusic too long`);
    }
    this.slabsMusics[id] = slabsMusic;
    return slabsMusic;
  }

  getSlabsMusic() {
    return this.slabsMusics;
  }

  deleteSlabsMusic(id: number) {
    const slabsMusicToDelete = this.slabsMusics[id];
    if (!slabsMusicToDelete) {
      throw new Error(`This slabsMusic does not exist`);
    }
    this.slabsMusics.splice(id, 1);
    return slabsMusicToDelete;
  }
}
