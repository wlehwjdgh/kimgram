import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        userById: async (_, args) => {
            const { id } = args;
            return await prisma.user({ id });
        }
    }
};


//데이터 모델만 만들어서 deploy하면 프리즈마가 리졸버를 다 만들어준다