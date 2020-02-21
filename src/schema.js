import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";


/// ** = 모든폴더 , *.graphql은 모든 .graphql파일
// api 폴더 밑의 모든 폴더속에 .graphql로 끝나는 모든 파일을 가져온다
const allTypes = fileLoader(path.join(__dirname,"/api/**/*.graphql"));

//api 폴더 밑에 resolver가 아닌 .js파일 두지 말것
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
});

export default schema;