import { IsNotEmpty } from "class-validator";
import { Video } from "src/graphql";

export class VideoDTO extends Video {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    url: string;

    @IsNotEmpty()
    userId: string;

}