import ProductService from "../../services/product/product-service";
import { RequestProduct, State, Product } from './../../domain/product/product-model';
import { BasePaginator } from '../../domain/pagination/Paginator'

export default {
  state: {
    paginator: {} as BasePaginator<Product>,
  },
  getters: {
    paginator: (state: State) => state.paginator,
  },
  mutations: {
    PRODUCTS_STORE_LOAD_PAGINATOR: (state, payload) => (state.paginator = payload),
  },

  actions: {
    PRODUCTS_STORE_CHANGE_PAGE_NUMBER: async ({ commit }, pageNumber: number) => {},

    SEARCH_PRODUCT: async ({ commit }, parameter: RequestProduct) => {
      await commit('PRODUCTS_STORE_LOAD_PAGINATOR', await ProductService.searchProduct(parameter))
    },
  },
}
