import { Module } from '@nestjs/common';
import { VideoResolver } from './videos.resolver';
import { VideoService } from './videos.service';

@Module({
    providers: [VideoService, VideoResolver]
})
export class VideosModule {}
