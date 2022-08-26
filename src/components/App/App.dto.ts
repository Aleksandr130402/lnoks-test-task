import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

@Exclude()
export class SearchItemsDto {
	@Expose()
	@IsString()
	public Poster: string;

	@Expose()
	@IsString()
	public Title: string;

	@Expose()
	@IsString()
	public Type: string;

	@Expose()
	@IsString()
	public Year: string;

	@Expose()
	@IsString()
	public imdbID: string;
}

@Exclude()
export class AppDto {
	@Expose()
	@IsString()
	public Response: string;

	@Expose()
	@IsString()
	public totalResults: string;

	@Expose()
	@Type(() => SearchItemsDto)
	@IsArray()
	@ValidateNested({ each: true })
	public Search: SearchItemsDto[];
}
