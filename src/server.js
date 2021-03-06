require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

// .env파일에서 포트를 읽어온다. 만약 없다면 default 4000
const PORT = process.env.PORT||4000

const server = new GraphQLServer({schema});

//graphql server는 사실 express로 만들어져있다.
// server에서 morgan 미들웨어 모듈을 추가ㅅ하자(옵션="dev")
server.express.use(logger("dev"));

// port는 .env파일에서 읽어옴, 두번째 파라미터는 콜백함수임.
server.start( { port: PORT }, () => 
    console.log(`Server running on port http://localhost:${PORT}`) );