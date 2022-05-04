import Generic from "../../../core/domain/generic/generic-mode"
import SchedulingService from "../../services/scheduling/scheduling.service"
import { filterScheduling } from '../../domain/scheduling/scheduling-model';

export default {
    state: () => ({
        schedulings: [],
        menus: [] as Generic []
    }),

    getters: {
        schedulings : (state) => state.schedulings,
        menus : (state) => state.menus,
    }, 

    mutations: {
        LOAD_MENU : (state, payload) => state.menus = payload,
        LOAD_SCHEDULINGS: (state, payload) => state.schedulings = payload,
    },

    actions : {
        LOAD_MENU : async ({ commit }) => {
           const menus = []
           let itemMenu = new Generic();
           itemMenu.nome = "Ambulatório";
           itemMenu.id = 1;           

           let subitemMenu = new Generic();
           subitemMenu.nome = "ITEM 1";
           itemMenu.items = []
           itemMenu.items.push(subitemMenu);

           menus.push(itemMenu)


           let itemMenu2 = new Generic();
           itemMenu2.nome = "Consultório";
           itemMenu2.id = 2;


           let subitemMenu2 = new Generic();
           subitemMenu2.nome = "ITAMAR LOPES";
           itemMenu2.items = []
           itemMenu2.items.push(subitemMenu2);

           menus.push(itemMenu2)

           let itemMenu3 = new Generic();
           itemMenu3.nome = "Internação";
           itemMenu3.id = 3

           let subitemMenu3 = new Generic();
           subitemMenu3.nome = "SALA 1";
           itemMenu3.items = []
           itemMenu3.items.push(subitemMenu3);
           
           menus.push(itemMenu3)
            

            await commit('LOAD_MENU', menus /* await SchedulingService.getMenu()*/)
        },

        ON_SELECT_MENU : async ({ commit, getters }, i : Generic) => {
          

            getters.menus.forEach(menu => {
                    menu.selected = false
            });

            i.selected = true;


            await commit('LOAD_MENU', getters.menus /* await SchedulingService.getMenu()*/)

        },

        LOAD_SCHEDULINGS : async ({ commit }, payload: filterScheduling) => {
            await commit('LOAD_SCHEDULINGS', await SchedulingService.getAll(payload))
        }
    }
}