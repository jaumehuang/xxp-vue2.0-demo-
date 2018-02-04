const state = {
        count:1
    }
const mutations={
        add(state){
            state.count+=1;
        },
        reduce(state){
            state.count-=1;
        }
    }