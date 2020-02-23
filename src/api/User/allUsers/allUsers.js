import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        allUsers: () => prisma.users()     
    }
};


//데이터 모델만 만들어서 deploy하면 프리즈마가 리졸버를 다 만들어준다