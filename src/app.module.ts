import { Module } from "@nestjs/common";
import { SlabsMusicModule } from "./slabs-music/slabs-music.module";

@Module({
  imports: [SlabsMusicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
