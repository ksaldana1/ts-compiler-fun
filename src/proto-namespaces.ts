import { Observable } from 'rxjs';

/**
 * Namespace bff.
 * @exports bff
 * @namespace
 */
export namespace bff {
  /**
   * Contains all the RPC service clients.
   * @exports bff.ClientFactory
   * @interface
   */
  export interface ClientFactory {
    /**
     * Returns the Inventory service client.
     * @returns {bff.Inventory}
     */
    getInventory(): bff.Inventory;

    /**
     * Returns the Users service client.
     * @returns {bff.Users}
     */
    getUsers(): bff.Users;
  }

  /**
   * Builder for an RPC service server.
   * @exports bff.ServerBuilder
   * @interface
   */
  export interface ServerBuilder {
    /**
     * Adds a Inventory service implementation.
     * @param {bff.Inventory} impl Inventory service implementation
     * @returns {bff.ServerBuilder}
     */
    addInventory(impl: bff.Inventory): bff.ServerBuilder;

    /**
     * Adds a Users service implementation.
     * @param {bff.Users} impl Users service implementation
     * @returns {bff.ServerBuilder}
     */
    addUsers(impl: bff.Users): bff.ServerBuilder;
  }

  /**
   * Constructs a new Inventory service.
   * @exports bff.Inventory
   * @interface
   */
  export interface Inventory {
    /**
     * Calls createCount.
     * @param {bff.createCountRequest} request createCountRequest message or plain object
     * @returns {Observable<bff.createCountResponse>}
     */
    createCount(
      request: bff.createCountRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.createCountResponse>;

    /**
     * Calls completeCount.
     * @param {bff.completeCountRequest} request completeCountRequest message or plain object
     * @returns {Observable<bff.completeCountResponse>}
     */
    completeCount(
      request: bff.completeCountRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.completeCountResponse>;

    /**
     * Calls getCountDetails.
     * @param {bff.getCountDetailsRequest} request getCountDetailsRequest message or plain object
     * @returns {Observable<bff.getCountDetailsResponse>}
     */
    getCountDetails(
      request: bff.getCountDetailsRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.getCountDetailsResponse>;

    /**
     * Calls getKitchenData.
     * @param {bff.getKitchenDataRequest} request getKitchenDataRequest message or plain object
     * @returns {Observable<bff.getKitchenDataResponse>}
     */
    getKitchenData(
      request: bff.getKitchenDataRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.getKitchenDataResponse>;

    /**
     * Calls listCounts.
     * @param {bff.listCountsRequest} request listCountsRequest message or plain object
     * @returns {Observable<bff.listCountsResponse>}
     */
    listCounts(
      request: bff.listCountsRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.listCountsResponse>;

    /**
     * Calls updateItemCounts.
     * @param {bff.updateItemCountsRequest} request updateItemCountsRequest message or plain object
     * @returns {Observable<bff.updateItemCountsResponse>}
     */
    updateItemCounts(
      request: bff.updateItemCountsRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.updateItemCountsResponse>;
  }

  /**
   * Constructs a new Users service.
   * @exports bff.Users
   * @interface
   */
  export interface Users {
    /**
     * Calls impersonate.
     * @param {bff.impersonateRequest} request impersonateRequest message or plain object
     * @returns {Observable<bff.impersonateResponse>}
     */
    impersonate(
      request: bff.impersonateRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.impersonateResponse>;

    /**
     * Calls listBusinessForImpersonator.
     * @param {bff.listBusinessForImpersonatorRequest} request listBusinessForImpersonatorRequest message or plain object
     * @returns {Observable<bff.listBusinessForImpersonatorResponse>}
     */
    listBusinessForImpersonator(
      request: bff.listBusinessForImpersonatorRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.listBusinessForImpersonatorResponse>;

    /**
     * Calls listUsersForImpersonator.
     * @param {bff.listUsersForImpersonatorRequest} request listUsersForImpersonatorRequest message or plain object
     * @returns {Observable<bff.listUsersForImpersonatorResponse>}
     */
    listUsersForImpersonator(
      request: bff.listUsersForImpersonatorRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.listUsersForImpersonatorResponse>;

    /**
     * Calls login.
     * @param {bff.loginRequest} request loginRequest message or plain object
     * @returns {Observable<bff.loginResponse>}
     */
    login(
      request: bff.loginRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.loginResponse>;

    /**
     * Calls refresh.
     * @param {bff.refreshRequest} request refreshRequest message or plain object
     * @returns {Observable<bff.refreshResponse>}
     */
    refresh(
      request: bff.refreshRequest,
      metadata?: any,
      callOptions?: object
    ): Observable<bff.refreshResponse>;
  }

  /**
   * Constructs a new listCountsRequest.
   * @exports bff.listCountsRequest
   * @interface
   */
  export interface listCountsRequest {
    /**
     * listCountsRequest kitchenId.
     * @type {string}
     */
    kitchenId: string;

    /**
     * listCountsRequest accessToken.
     * @type {string}
     */
    accessToken: string;

    /**
     * listCountsRequest pageSize.
     * @type {number|undefined}
     */
    pageSize?: number;

    /**
     * listCountsRequest pageNumber.
     * @type {number|undefined}
     */
    pageNumber?: number;
  }

  /**
   * Constructs a new listCountsResponse.
   * @exports bff.listCountsResponse
   * @interface
   */
  export interface listCountsResponse {
    /**
     * listCountsResponse counts.
     * @type {Object.<string,avero.inventory.Count>|undefined}
     */
    counts?: { [k: string]: avero.inventory.Count };

    /**
     * listCountsResponse hasMore.
     * @type {boolean|undefined}
     */
    hasMore?: boolean;
  }

  /**
   * Constructs a new getCountDetailsRequest.
   * @exports bff.getCountDetailsRequest
   * @interface
   */
  export interface getCountDetailsRequest {
    /**
     * getCountDetailsRequest countId.
     * @type {string}
     */
    countId: string;

    /**
     * getCountDetailsRequest accessToken.
     * @type {string}
     */
    accessToken: string;

    /**
     * getCountDetailsRequest itemCountsUpdatedSince.
     * @type {string|undefined}
     */
    itemCountsUpdatedSince?: string;
  }

  /**
   * Constructs a new getCountDetailsResponse.
   * @exports bff.getCountDetailsResponse
   * @interface
   */
  export interface getCountDetailsResponse {
    /**
     * getCountDetailsResponse count.
     * @type {avero.inventory.Count|undefined}
     */
    count?: avero.inventory.Count;

    /**
     * getCountDetailsResponse itemCounts.
     * @type {Object.<string,avero.inventory.ItemCount>|undefined}
     */
    itemCounts?: { [k: string]: avero.inventory.ItemCount };
  }

  /**
   * Constructs a new createCountRequest.
   * @exports bff.createCountRequest
   * @interface
   */
  export interface createCountRequest {
    /**
     * createCountRequest countTypeId.
     * @type {string}
     */
    countTypeId: string;

    /**
     * createCountRequest kitchenId.
     * @type {string}
     */
    kitchenId: string;

    /**
     * createCountRequest accessToken.
     * @type {string}
     */
    accessToken: string;
  }

  /**
   * Constructs a new createCountResponse.
   * @exports bff.createCountResponse
   * @interface
   */
  export interface createCountResponse {
    /**
     * createCountResponse count.
     * @type {avero.inventory.Count|undefined}
     */
    count?: avero.inventory.Count;

    /**
     * createCountResponse itemCounts.
     * @type {Object.<string,avero.inventory.ItemCount>|undefined}
     */
    itemCounts?: { [k: string]: avero.inventory.ItemCount };
  }

  /**
   * Constructs a new getKitchenDataRequest.
   * @exports bff.getKitchenDataRequest
   * @interface
   */
  export interface getKitchenDataRequest {
    /**
     * getKitchenDataRequest kitchenId.
     * @type {string}
     */
    kitchenId: string;

    /**
     * getKitchenDataRequest accessToken.
     * @type {string}
     */
    accessToken: string;
  }

  /**
   * Constructs a new getKitchenDataResponse.
   * @exports bff.getKitchenDataResponse
   * @interface
   */
  export interface getKitchenDataResponse {
    /**
     * getKitchenDataResponse storageAreas.
     * @type {Object.<string,avero.inventory.StorageArea>|undefined}
     */
    storageAreas?: { [k: string]: avero.inventory.StorageArea };

    /**
     * getKitchenDataResponse countTypes.
     * @type {Object.<string,avero.inventory.CountType>|undefined}
     */
    countTypes?: { [k: string]: avero.inventory.CountType };

    /**
     * getKitchenDataResponse counts.
     * @type {Object.<string,avero.inventory.Count>|undefined}
     */
    counts?: { [k: string]: avero.inventory.Count };

    /**
     * getKitchenDataResponse items.
     * @type {Object.<string,avero.inventory.Item>|undefined}
     */
    items?: { [k: string]: avero.inventory.Item };

    /**
     * getKitchenDataResponse products.
     * @type {Object.<string,avero.product.Product>|undefined}
     */
    products?: { [k: string]: avero.product.Product };
  }

  /**
   * Constructs a new updatedItemCount.
   * @exports bff.updatedItemCount
   * @interface
   */
  export interface updatedItemCount {
    /**
     * updatedItemCount id.
     * @type {string|undefined}
     */
    id?: string;

    /**
     * updatedItemCount dateCounted.
     * @type {string|undefined}
     */
    dateCounted?: string;

    /**
     * updatedItemCount unitCounts.
     * @type {Array.<avero.inventory.UnitCount>|undefined}
     */
    unitCounts?: avero.inventory.UnitCount[];
  }

  /**
   * Constructs a new updateItemCountsRequest.
   * @exports bff.updateItemCountsRequest
   * @interface
   */
  export interface updateItemCountsRequest {
    /**
     * updateItemCountsRequest accessToken.
     * @type {string}
     */
    accessToken: string;

    /**
     * updateItemCountsRequest countId.
     * @type {string}
     */
    countId: string;

    /**
     * updateItemCountsRequest updatedItemCounts.
     * @type {Array.<bff.updatedItemCount>|undefined}
     */
    updatedItemCounts?: bff.updatedItemCount[];

    /**
     * updateItemCountsRequest itemCountsUpdatedSince.
     * @type {string|undefined}
     */
    itemCountsUpdatedSince?: string;
  }

  /**
   * Constructs a new updateItemCountsResponse.
   * @exports bff.updateItemCountsResponse
   * @interface
   */
  export interface updateItemCountsResponse {
    /**
     * updateItemCountsResponse count.
     * @type {avero.inventory.Count|undefined}
     */
    count?: avero.inventory.Count;

    /**
     * updateItemCountsResponse itemCounts.
     * @type {Object.<string,avero.inventory.ItemCount>|undefined}
     */
    itemCounts?: { [k: string]: avero.inventory.ItemCount };
  }

  /**
   * Constructs a new completeCountRequest.
   * @exports bff.completeCountRequest
   * @interface
   */
  export interface completeCountRequest {
    /**
     * completeCountRequest countId.
     * @type {string}
     */
    countId: string;

    /**
     * completeCountRequest accessToken.
     * @type {string}
     */
    accessToken: string;
  }

  /**
   * Constructs a new completeCountResponse.
   * @exports bff.completeCountResponse
   * @interface
   */
  export interface completeCountResponse {
    /**
     * completeCountResponse count.
     * @type {avero.inventory.Count|undefined}
     */
    count?: avero.inventory.Count;

    /**
     * completeCountResponse itemCounts.
     * @type {Object.<string,avero.inventory.ItemCount>|undefined}
     */
    itemCounts?: { [k: string]: avero.inventory.ItemCount };
  }

  /**
   * Constructs a new userTokens.
   * @exports bff.userTokens
   * @interface
   */
  export interface userTokens {
    /**
     * userTokens userAccessToken.
     * @type {string|undefined}
     */
    userAccessToken?: string;

    /**
     * userTokens userRefreshToken.
     * @type {string|undefined}
     */
    userRefreshToken?: string;
  }

  /**
   * Constructs a new loginRequest.
   * @exports bff.loginRequest
   * @interface
   */
  export interface loginRequest {
    /**
     * loginRequest username.
     * @type {string|undefined}
     */
    username?: string;

    /**
     * loginRequest password.
     * @type {string|undefined}
     */
    password?: string;

    /**
     * loginRequest refreshToken.
     * @type {string|undefined}
     */
    refreshToken?: string;
  }

  /**
   * Constructs a new loginResponse.
   * @exports bff.loginResponse
   * @interface
   */
  export interface loginResponse {
    /**
     * loginResponse tokens.
     * @type {bff.userTokens|undefined}
     */
    tokens?: bff.userTokens;

    /**
     * loginResponse kitchens.
     * @type {Object.<string,avero.inventory.Kitchen>|undefined}
     */
    kitchens?: { [k: string]: avero.inventory.Kitchen };
  }

  /**
   * Constructs a new refreshRequest.
   * @exports bff.refreshRequest
   * @interface
   */
  export interface refreshRequest {
    /**
     * refreshRequest refreshToken.
     * @type {string}
     */
    refreshToken: string;
  }

  /**
   * Constructs a new refreshResponse.
   * @exports bff.refreshResponse
   * @interface
   */
  export interface refreshResponse {
    /**
     * refreshResponse userAccessToken.
     * @type {string|undefined}
     */
    userAccessToken?: string;

    /**
     * refreshResponse userRefreshToken.
     * @type {string|undefined}
     */
    userRefreshToken?: string;

    /**
     * refreshResponse impersonatorAccessToken.
     * @type {string|undefined}
     */
    impersonatorAccessToken?: string;
  }

  /**
   * Constructs a new listBusinessForImpersonatorRequest.
   * @exports bff.listBusinessForImpersonatorRequest
   * @interface
   */
  export interface listBusinessForImpersonatorRequest {
    /**
     * listBusinessForImpersonatorRequest accessToken.
     * @type {string}
     */
    accessToken: string;

    /**
     * listBusinessForImpersonatorRequest pageNumber.
     * @type {number|undefined}
     */
    pageNumber?: number;

    /**
     * listBusinessForImpersonatorRequest pageSize.
     * @type {number|undefined}
     */
    pageSize?: number;

    /**
     * listBusinessForImpersonatorRequest text.
     * @type {string|undefined}
     */
    text?: string;
  }

  /**
   * Constructs a new listBusinessForImpersonatorResponse.
   * @exports bff.listBusinessForImpersonatorResponse
   * @interface
   */
  export interface listBusinessForImpersonatorResponse {
    /**
     * listBusinessForImpersonatorResponse businesses.
     * @type {Array.<avero.user.Business>|undefined}
     */
    businesses?: avero.user.Business[];
  }

  /**
   * Constructs a new listUsersForImpersonatorRequest.
   * @exports bff.listUsersForImpersonatorRequest
   * @interface
   */
  export interface listUsersForImpersonatorRequest {
    /**
     * listUsersForImpersonatorRequest accessToken.
     * @type {string}
     */
    accessToken: string;

    /**
     * listUsersForImpersonatorRequest businessId.
     * @type {string}
     */
    businessId: string;
  }

  /**
   * Constructs a new listUsersForImpersonatorResponse.
   * @exports bff.listUsersForImpersonatorResponse
   * @interface
   */
  export interface listUsersForImpersonatorResponse {
    /**
     * listUsersForImpersonatorResponse users.
     * @type {Array.<avero.user.User>|undefined}
     */
    users?: avero.user.User[];
  }

  /**
   * Constructs a new impersonateRequest.
   * @exports bff.impersonateRequest
   * @interface
   */
  export interface impersonateRequest {
    /**
     * impersonateRequest accessToken.
     * @type {string}
     */
    accessToken: string;

    /**
     * impersonateRequest username.
     * @type {string}
     */
    username: string;
  }

  /**
   * Constructs a new impersonateResponse.
   * @exports bff.impersonateResponse
   * @interface
   */
  export interface impersonateResponse {
    /**
     * impersonateResponse tokens.
     * @type {bff.userTokens|undefined}
     */
    tokens?: bff.userTokens;

    /**
     * impersonateResponse kitchens.
     * @type {Object.<string,avero.inventory.Kitchen>|undefined}
     */
    kitchens?: { [k: string]: avero.inventory.Kitchen };
  }
}

/**
 * Namespace avero.
 * @exports avero
 * @namespace
 */
export namespace avero {
  /**
   * Contains all the RPC service clients.
   * @exports avero.ClientFactory
   * @interface
   */
  export interface ClientFactory {}

  /**
   * Builder for an RPC service server.
   * @exports avero.ServerBuilder
   * @interface
   */
  export interface ServerBuilder {}

  /**
   * Namespace inventory.
   * @exports avero.inventory
   * @namespace
   */
  export namespace inventory {
    /**
     * Contains all the RPC service clients.
     * @exports avero.inventory.ClientFactory
     * @interface
     */
    export interface ClientFactory {}

    /**
     * Builder for an RPC service server.
     * @exports avero.inventory.ServerBuilder
     * @interface
     */
    export interface ServerBuilder {}

    /**
     * Constructs a new Kitchen.
     * @exports avero.inventory.Kitchen
     * @interface
     */
    export interface Kitchen {
      /**
       * Kitchen id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * Kitchen name.
       * @type {string|undefined}
       */
      name?: string;
    }

    /**
     * Constructs a new Item.
     * @exports avero.inventory.Item
     * @interface
     */
    export interface Item {
      /**
       * Item id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * Item kitchen_id.
       * @type {string|undefined}
       */
      kitchen_id?: string;

      /**
       * Item name.
       * @type {string|undefined}
       */
      name?: string;

      /**
       * Item productId.
       * @type {string|undefined}
       */
      productId?: string;

      /**
       * Item mergeProductId.
       * @type {string|undefined}
       */
      mergeProductId?: string;

      /**
       * Item recipeId.
       * @type {string|undefined}
       */
      recipeId?: string;

      /**
       * Item source.
       * @name avero.inventory.Item#source
       * @type {string|undefined}
       */
      source?: string;
    }

    /**
     * Constructs a new ItemCount.
     * @exports avero.inventory.ItemCount
     * @interface
     */
    export interface ItemCount {
      /**
       * ItemCount id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * ItemCount dateUpdated.
       * @type {string|undefined}
       */
      dateUpdated?: string;

      /**
       * ItemCount updatedBy.
       * @type {string|undefined}
       */
      updatedBy?: string;

      /**
       * ItemCount itemId.
       * @type {string|undefined}
       */
      itemId?: string;

      /**
       * ItemCount storageAreaId.
       * @type {string|undefined}
       */
      storageAreaId?: string;

      /**
       * ItemCount countId.
       * @type {string|undefined}
       */
      countId?: string;

      /**
       * ItemCount unitCounts.
       * @type {Array.<avero.inventory.UnitCount>|undefined}
       */
      unitCounts?: avero.inventory.UnitCount[];

      /**
       * ItemCount dateCounted.
       * @type {string|undefined}
       */
      dateCounted?: string;

      /**
       * ItemCount orderIndex.
       * @type {number|undefined}
       */
      orderIndex?: number;
    }

    /**
     * Constructs a new UnitCount.
     * @exports avero.inventory.UnitCount
     * @interface
     */
    export interface UnitCount {
      /**
       * UnitCount unitOfMeasure.
       * @type {avero.inventory.UnitOfMeasure|undefined}
       */
      unitOfMeasure?: avero.inventory.UnitOfMeasure;

      /**
       * UnitCount amount.
       * @type {number|undefined}
       */
      amount?: number;
    }

    /**
     * Constructs a new Count.
     * @exports avero.inventory.Count
     * @interface
     */
    export interface Count {
      /**
       * Count id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * Count dateCreated.
       * @type {string|undefined}
       */
      dateCreated?: string;

      /**
       * Count dateUpdated.
       * @type {string|undefined}
       */
      dateUpdated?: string;

      /**
       * Count createdBy.
       * @type {string|undefined}
       */
      createdBy?: string;

      /**
       * Count updatedBy.
       * @type {string|undefined}
       */
      updatedBy?: string;

      /**
       * Count kitchenId.
       * @type {string|undefined}
       */
      kitchenId?: string;

      /**
       * Count name.
       * @type {string|undefined}
       */
      name?: string;

      /**
       * Count isComplete.
       * @type {boolean|undefined}
       */
      isComplete?: boolean;

      /**
       * Count percentComplete.
       * @type {number|undefined}
       */
      percentComplete?: number;
    }

    /**
     * Constructs a new CountDetails.
     * @exports avero.inventory.CountDetails
     * @interface
     */
    export interface CountDetails {
      /**
       * CountDetails count.
       * @type {avero.inventory.Count|undefined}
       */
      count?: avero.inventory.Count;

      /**
       * CountDetails itemCounts.
       * @type {Array.<avero.inventory.ItemCount>|undefined}
       */
      itemCounts?: avero.inventory.ItemCount[];
    }

    /**
     * Constructs a new StorageArea.
     * @exports avero.inventory.StorageArea
     * @interface
     */
    export interface StorageArea {
      /**
       * StorageArea id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * StorageArea name.
       * @type {string|undefined}
       */
      name?: string;

      /**
       * StorageArea orderIndex.
       * @type {number|undefined}
       */
      orderIndex?: number;
    }

    /**
     * Constructs a new UnitOfMeasure.
     * @exports avero.inventory.UnitOfMeasure
     * @interface
     */
    export interface UnitOfMeasure {
      /**
       * UnitOfMeasure id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * UnitOfMeasure name.
       * @type {string|undefined}
       */
      name?: string;
    }

    /**
     * Constructs a new CountType.
     * @exports avero.inventory.CountType
     * @interface
     */
    export interface CountType {
      /**
       * CountType id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * CountType name.
       * @type {string|undefined}
       */
      name?: string;
    }

    /**
     * Constructs a new ProductClass.
     * @exports avero.inventory.ProductClass
     * @interface
     */
    export interface ProductClass {
      /**
       * ProductClass id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * ProductClass name.
       * @type {string|undefined}
       */
      name?: string;
    }
  }

  /**
   * Namespace product.
   * @exports avero.product
   * @namespace
   */
  export namespace product {
    /**
     * Contains all the RPC service clients.
     * @exports avero.product.ClientFactory
     * @interface
     */
    export interface ClientFactory {}

    /**
     * Builder for an RPC service server.
     * @exports avero.product.ServerBuilder
     * @interface
     */
    export interface ServerBuilder {}

    /**
     * Constructs a new Product.
     * @exports avero.product.Product
     * @interface
     */
    export interface Product {
      /**
       * Product id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * Product dateCreated.
       * @type {string|undefined}
       */
      dateCreated?: string;

      /**
       * Product kitchenId.
       * @type {string|undefined}
       */
      kitchenId?: string;

      /**
       * Product name.
       * @type {string|undefined}
       */
      name?: string;

      /**
       * Product description.
       * @type {string|undefined}
       */
      description?: string;

      /**
       * Product brandName.
       * @type {string|undefined}
       */
      brandName?: string;

      /**
       * Product vendor.
       * @type {avero.product.Vendor|undefined}
       */
      vendor?: avero.product.Vendor;

      /**
       * Product pack.
       * @type {avero.product.Pack|undefined}
       */
      pack?: avero.product.Pack;

      /**
       * Product priceUnitOfMeasure.
       * @type {string|undefined}
       */
      priceUnitOfMeasure?: string;

      /**
       * Product pricePerUnitOfMeasure.
       * @type {number|undefined}
       */
      pricePerUnitOfMeasure?: number;

      /**
       * Product productClassId.
       * @type {string|undefined}
       */
      productClassId?: string;
    }

    /**
     * Constructs a new Vendor.
     * @exports avero.product.Vendor
     * @interface
     */
    export interface Vendor {
      /**
       * Vendor id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * Vendor name.
       * @type {string|undefined}
       */
      name?: string;
    }

    /**
     * Constructs a new Pack.
     * @exports avero.product.Pack
     * @interface
     */
    export interface Pack {
      /**
       * Pack size.
       * @type {string|undefined}
       */
      size?: string;

      /**
       * Pack unitOfMeasure.
       * @type {string|undefined}
       */
      unitOfMeasure?: string;
    }

    /**
     * Constructs a new MergedProduct.
     * @exports avero.product.MergedProduct
     * @interface
     */
    export interface MergedProduct {
      /**
       * MergedProduct id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * MergedProduct dateCreated.
       * @type {string|undefined}
       */
      dateCreated?: string;

      /**
       * MergedProduct name.
       * @type {string|undefined}
       */
      name?: string;

      /**
       * MergedProduct productIds.
       * @type {Array.<string>|undefined}
       */
      productIds?: string[];

      /**
       * MergedProduct productClassId.
       * @type {string|undefined}
       */
      productClassId?: string;
    }

    /**
     * Constructs a new Recipe.
     * @exports avero.product.Recipe
     * @interface
     */
    export interface Recipe {
      /**
       * Recipe id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * Recipe name.
       * @type {string|undefined}
       */
      name?: string;

      /**
       * Recipe yieldUnitOfMeasure.
       * @type {string|undefined}
       */
      yieldUnitOfMeasure?: string;

      /**
       * Recipe yieldSize.
       * @type {string|undefined}
       */
      yieldSize?: string;

      /**
       * Recipe productClassId.
       * @type {string|undefined}
       */
      productClassId?: string;
    }
  }

  /**
   * Namespace user.
   * @exports avero.user
   * @namespace
   */
  export namespace user {
    /**
     * Contains all the RPC service clients.
     * @exports avero.user.ClientFactory
     * @interface
     */
    export interface ClientFactory {}

    /**
     * Builder for an RPC service server.
     * @exports avero.user.ServerBuilder
     * @interface
     */
    export interface ServerBuilder {}

    /**
     * Constructs a new User.
     * @exports avero.user.User
     * @interface
     */
    export interface User {
      /**
       * User username.
       * @type {string|undefined}
       */
      username?: string;

      /**
       * User firstName.
       * @type {string|undefined}
       */
      firstName?: string;

      /**
       * User lastName.
       * @type {string|undefined}
       */
      lastName?: string;

      /**
       * User roles.
       * @type {Array.<string>|undefined}
       */
      roles?: string[];
    }

    /**
     * Constructs a new Business.
     * @exports avero.user.Business
     * @interface
     */
    export interface Business {
      /**
       * Business id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * Business name.
       * @type {string|undefined}
       */
      name?: string;

      /**
       * Business modules.
       * @type {Array.<avero.user.Module>|undefined}
       */
      modules?: avero.user.Module[];
    }

    /**
     * Constructs a new Module.
     * @exports avero.user.Module
     * @interface
     */
    export interface Module {
      /**
       * Module id.
       * @type {string|undefined}
       */
      id?: string;

      /**
       * Module name.
       * @type {string|undefined}
       */
      name?: string;

      /**
       * Module enabled.
       * @type {boolean|undefined}
       */
      enabled?: boolean;
    }
  }
}
