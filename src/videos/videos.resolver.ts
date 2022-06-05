import { Injectable } from "@nestjs/common";
import { Args, Mutation, Query } from "@nestjs/graphql";
import { Video } from "src/graphql";
import { VideoDTO } from "./dto/video.dto";
import { VideoService } from "./videos.service";

@Injectable()
export class VideoResolver {
    constructor(private readonly videoService: VideoService) {}

    @Query('getVideos')
    async getVideos(): Promise<Video[]> {
        return this.videoService.findAll();
    }

    @Mutation('createVideo')
    async createVideo(@Args('input') args: VideoDTO): Promise<Video> {
        return this.videoService.create(args);
    }
}