export class RecipeTest {

    id: string;
    name: string;
    source: string;
    cooktime: number;
    comments: string;
    instructions: string;
    ingredients: string[];
    tags: string[];

    constructor(
        idParam: string,
        nameParam: string,
        sourceParam: string,
        cooktimeParam: number,
        commentsParam: string,
        instructionsParam: string,
        ingredientsParam: string[],
        tagsParam: string[]
        ) {
        this.id = idParam;
        this.name = nameParam;
        this.source = sourceParam;
        this.cooktime = cooktimeParam;
        this.comments = commentsParam;
        this.instructions = instructionsParam;
        this.ingredients = ingredientsParam;
        this.tags = tagsParam;
    }

    outlineRecipe() {
        return this.name + ' ' + this.source;
    }
}
