import { Test, TestingModule } from "@nestjs/testing";
import { SlabsMusicService } from "./slabs-music.service";

describe("SlabsMusicService", () => {
  let service: SlabsMusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlabsMusicService],
    }).compile();

    service = module.get<SlabsMusicService>(SlabsMusicService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("createSlabsMusic", () => {
    it("should create slabsMusic", () => {
      // Arrange
      service.slabsMusics = [];
      const payload = "This is my slabsMusic";

      // Act
      const slabsMusic = service.createSlabsMusic(payload);

      // Assert
      expect(slabsMusic).toBe(payload);
      expect(service.slabsMusics).toHaveLength(1);
    });

    it("should prevent over 100 character slabsMusics", () => {
      const payload =
        "This is a long slabsMusic over 100 characters This is a long slabsMusic over 100 characters This is a long t...";

      const slabsMusic = () => {
        return service.createSlabsMusic(payload);
      };

      expect(slabsMusic).toThrowError();
    });
  });

  describe("updateSlabsMusic", () => {
    it("should update and return slabsMusic", () => {
      service.slabsMusics = ["hello world"];
      const id = 0;

      const slabsMusic = service.updateSlabsMusic("goodbye world", id);

      expect(slabsMusic).toBe("goodbye world");
      expect(service.slabsMusics[id]).toBe("goodbye world");
    });

    it("show throw an error for slabsMusics that exceed 100 characters", () => {
      service.slabsMusics = ["hello world"];
      const payload =
        "slabsMusic that is over 100 characters in length slabsMusic that is over 100 characters in length slabsMusic that is over 100 characters in length slabsMusic that is over 100 characters in length ";

      const slabsMusic = () => service.updateSlabsMusic(payload, 0);

      expect(slabsMusic).toThrowError();
    });

    it("show throw an error if the slabsMusic does not exist", () => {
      service.slabsMusics = ["hello world"];

      const slabsMusic = () => service.updateSlabsMusic("goodbye world", 1);

      expect(slabsMusic).toThrowError();
    });
  });

  describe("getSlabsMusic", () => {
    it("should return back all slabsMusics", () => {
      service.slabsMusics = [
        "hello world",
        "this is a slabsMusic",
        "another slabsMusic",
      ];

      const slabsMusics = service.getSlabsMusic();

      slabsMusics.forEach((slabsMusic) =>
        expect(typeof slabsMusic).toBe("string")
      );
      expect(slabsMusics).toHaveLength(3);
    });
  });

  describe("deleteSlabsMusic", () => {
    it("should delete and return slabsMusic", () => {
      service.slabsMusics = ["hello world"];
      const id = 0;

      const slabsMusic = service.deleteSlabsMusic(id);

      expect(slabsMusic).toBe("hello world");
      expect(service.slabsMusics[id]).toBe(undefined);
      expect(service.slabsMusics).toHaveLength(0);
    });

    it("show throw an error if the slabsMusic does not exist", () => {
      service.slabsMusics = ["hello world"];

      const slabsMusic = () => service.deleteSlabsMusic(1);

      expect(slabsMusic).toThrowError();
    });
  });
});
