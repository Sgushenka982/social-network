const REGION_CHANGE = 'REGION_CHANGE'
const DISTRICT_CHANGE = 'DISTRICT_CHANGE'
const CITY_CHANGE = 'CITY_CHANGE'
const SETTLEMENT_CHANGE = 'SETTLEMENT_CHANGE'
const VILLAGE_CHANGE = 'VILLAGE_CHANGE'
const STREET_CHANGE = 'STREET_CHANGE'
const BUILDING_CHANGE = 'BUILDING_CHANGE'
const APARTMENT_CHANGE = 'APARTMENT_CHANGE'
const SET_VALUE = 'SET_VALUE'
const RESET_VALUE = 'RESET_VALUE'
const SET_OBJECT = 'SET_OBJECT'
const SET_INDEX_VALUE = 'SET_INDEX_VALUE'
const REGION_RESET = 'REGION_RESET'
const DISTRICT_RESET = 'DISTRICT_RESET'
const CITY_RESET = 'CITY_RESET'
const SETTLEMENT_RESET = 'SETTLEMENT_RESET'
const VILLAGE_RESET = 'VILLAGE_RESET'
const STREET_RESET = 'STREET_RESET'
const BUILDING_RESET = 'BUILDING_RESET'
const APARTMENT_RESET = 'APARTMENT_RESET'



const regionChange = (region) => ({ type: REGION_CHANGE, region });
const regionReset = ()=>({type:REGION_RESET})
const districtChange = (district) => ({ type: DISTRICT_CHANGE, district });
const districtReset = ()=>({type:DISTRICT_RESET})
const cityChange = (city) => ({ type: CITY_CHANGE, city });
const cityReset = ()=>({type:CITY_RESET})
const streetChange = (street) => ({ type: STREET_CHANGE, street });
const streetReset = ()=>({type:STREET_RESET})
const settlementChange = (settlement) => ({ type: SETTLEMENT_CHANGE, settlement });
const settlementReset = ()=>({type:SETTLEMENT_RESET})
const villageChange = (village) => ({ type: VILLAGE_CHANGE, village });
const villageReset = ()=>({type:VILLAGE_RESET})
const buildingChange = (building) => ({ type: BUILDING_CHANGE, building });
const buildingReset = ()=>({type:BUILDING_RESET})
const apartmentChange = (apartment) => ({ type: APARTMENT_CHANGE, apartment });
const apartmentReset = ()=>({type:APARTMENT_RESET})
const setValue = (value, contentType) => ({ type: SET_VALUE, value, contentType });
export const resetValue = () => ({ type: RESET_VALUE });
export const setObject = (objects, contentType) => ({ type: SET_OBJECT, objects, contentType });
export const setIndexValue = (index) => ({ type: SET_INDEX_VALUE, index });


let initialState = {
    adress: {
        region: {
            object: '',
            suggestObject:[],
            readonly: false,
            contentType: 'region',
            label: 'Субъект РФ',
            value: '',
            func: regionChange,
            resetFunc: regionReset,
            setValue
        },
        district: {
            object: '',
            suggestObject:[],
            readonly: true,
            contentType: 'district',
            label: 'Район',
            value: '',
            func: districtChange,
            resetFunc: districtReset,
            setValue
        },
        city: {
            object: '',
            suggestObject:[],
            readonly: true,
            contentType: 'city',
            label: 'Город',
            name: 'city',
            value: '',
            func: cityChange,
            resetFunc: cityReset,
            setValue
        },
        settlement: {
            object: '',
            suggestObject:[],
            readonly: true,
            contentType: 'city',
            label: 'Поселок/Деревня',
            name: 'settlement',
            value: '',
            func: settlementChange,
            resetFunc: settlementReset,
            setValue
        },
        village: {
            object: '',
            suggestObject:[],
            readonly: true,
            contentType: 'city',
            label: 'Снт/тер.',
            name: 'village',
            value: '',
            func: villageChange,
            resetFunc: villageReset,
            setValue
        },
        street: {
            object: '',
            suggestObject:[],
            readonly: true,
            contentType: 'street',
            label: 'Улица',
            value: '',
            func: streetChange,
            resetFunc: streetReset,
            setValue
        },
        building: {
            object: '',
            suggestObject:[],
            readonly: true,
            contentType: 'building',
            label: 'Дом',
            value: '',
            extra:'',
            func: buildingChange,
            resetFunc: buildingReset,
            setValue
        },
        apartment: {
            object: '',
            suggestObject:[],
            readonly: true,
            contentType: 'apartment',
            label: 'Квартира',
            value: '',
            func: apartmentChange,
            resetFunc: apartmentReset,
            setValue
        }
    },
    post_Index: ''
}

const testFiasReducer = (state = initialState, action) => {
    const resetToStart = {
        ...state,
        adress:{
            ...state.adress,
            region:{
                ...state.adress.region,
                object: '',
                suggestObject:[],
                value:'',
                readonly: false
            },
            district: {
                ...state.adress.district,
                object: '',
                suggestObject:[],
                value:'',
                readonly: true
            },
            city: {
                ...state.adress.city,
                object: '',
                suggestObject:[],
                value:'',
                readonly: true
            },
            settlement: {
                ...state.adress.settlement,
                object: '',
                suggestObject:[],
                value:'',
                readonly: true
            },
            village: {
                ...state.adress.village,
                object: '',
                suggestObject:[],
                value:'',
                readonly: true
            },
            street: {
                ...state.adress.street,
                object: '',
                suggestObject:[],
                value:'',
                readonly: true
            },
            building: {
                ...state.adress.building,
                object: '',
                suggestObject:[],
                extra:'',
                value:'',
                readonly: true
            },
            apartment: {
                ...state.adress.apartment,
                object: '',
                suggestObject:[],
                value:'',
                readonly: true
            }
        }
    }

    switch (action.type) {
        case REGION_CHANGE:
            debugger
            return {
                ...state,
                adress: {
                    ...state.adress,
                    region: {
                        ...state.adress.region,
                        object: action.region,
                        readonly: true
                    },
                    district: {
                        ...state.adress.district,
                        readonly: false
                    },
                    city: {
                        ...state.adress.city,
                        readonly: false
                    }
                }
            }
        case REGION_RESET:
            return resetToStart
        case DISTRICT_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
                    district: {
                        ...state.adress.district,
                        object: action.district,
                        readonly: true
                    },
                    settlement: {
                        ...state.adress.settlement,
                        readonly: false
                    },
                    village: {
                        ...state.adress.village,
                        readonly: false
                    },
                    street: {
                        ...state.adress.street,
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        readonly: false
                    }
                }
            }
        case DISTRICT_RESET:
            return {
                ...state,
                adress:{
                    ...state.adress,
                    district: {
                        ...state.adress.district,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    city: {
                        ...state.adress.city,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    settlement: {
                        ...state.adress.settlement,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: true
                    },
                    village: {
                        ...state.adress.village,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: true
                    },
                    street: {
                        ...state.adress.street,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: true
                    },
                    building: {
                        ...state.adress.building,
                        object: '',
                        suggestObject:[],
                        extra:'',
                        value:'',
                        readonly: true
                    },
                    apartment: {
                        ...state.adress.apartment,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: true
                    }
                }
            }
        case CITY_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
                    district: {
                        ...state.adress.district,
                        value:state.adress.district.object===''?'':state.adress.district.value,
                        readonly: true
                    },
                    city: {
                        ...state.adress.city,
                        object: action.city,
                        readonly: true
                    },
                    settlement: {
                        ...state.adress.settlement,
                        readonly: false
                    },
                    village: {
                        ...state.adress.village,
                        readonly: false
                    },
                    street: {
                        ...state.adress.street,
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        readonly: false
                    }
                }
            }
        case CITY_RESET:
            return {
                ...state,
                adress:{
                    ...state.adress,
                    district: {
                        ...state.adress.district,
                        readonly: false
                    },
                    city: {
                        ...state.adress.city,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    settlement: {
                        ...state.adress.settlement,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: true
                    },
                    village: {
                        ...state.adress.village,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: true
                    },
                    street: {
                        ...state.adress.street,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: true
                    },
                    building: {
                        ...state.adress.building,
                        object: '',
                        suggestObject:[],
                        extra:'',
                        value:'',
                        readonly: true
                    },
                    apartment: {
                        ...state.adress.apartment,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: true
                    }
                }
            }
        case SETTLEMENT_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
                    city: {
                        ...state.adress.city,
                        readonly: true
                    },
                    settlement: {
                        ...state.adress.settlement,
                        object: action.settlement,
                        readonly: true
                    },
                    village: {
                        ...state.adress.village,
                        readonly: false
                    },
                    street: {
                        ...state.adress.street,
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        readonly: false
                    }
                }
            }
        case SETTLEMENT_RESET:
            return {
                ...state,
                adress:{
                    ...state.adress,
                    settlement: {
                        ...state.adress.settlement,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    village: {
                        ...state.adress.village,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    street: {
                        ...state.adress.street,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        object: '',
                        suggestObject:[],
                        extra:'',
                        value:'',
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    }
                }
            }
        case VILLAGE_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
                    city: {
                        ...state.adress.city,
                        readonly: true
                    },
                    settlement: {
                        ...state.adress.settlement,
                        readonly: true
                    },
                    village: {
                        ...state.adress.village,
                        object: action.village,
                        readonly: true
                    },
                    street: {
                        ...state.adress.street,
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        readonly: false
                    }
                }
            }
        case VILLAGE_RESET:
            return {
                ...state,
                adress:{
                    ...state.adress,
                    settlement: {
                        ...state.adress.settlement,
                        readonly: false
                    },
                    village: {
                        ...state.adress.village,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    street: {
                        ...state.adress.street,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        object: '',
                        suggestObject:[],
                        extra:'',
                        value:'',
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    }
                }
            }
        case STREET_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
                    city: {
                        ...state.adress.city,
                        readonly: true
                    },
                    settlement: {
                        ...state.adress.settlement,
                        readonly: true
                    },
                    village: {
                        ...state.adress.village,
                        readonly: true
                    },
                    street: {
                        ...state.adress.street,
                        object: action.street,
                        readonly: true
                    },
                    building: {
                        ...state.adress.building,
                        readonly: false
                    }
                }
            }
        case STREET_RESET:
            return {
                ...state,
                adress:{
                    ...state.adress,
                    settlement: {
                        ...state.adress.settlement,
                        readonly: false
                    },
                    village: {
                        ...state.adress.village,
                        readonly: false
                    },
                    street: {
                        ...state.adress.street,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        object: '',
                        suggestObject:[],
                        extra:'',
                        value:'',
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    }
                }
            }
        case BUILDING_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
                    city: {
                        ...state.adress.city,
                        readonly: true
                    },
                    settlement: {
                        ...state.adress.settlement,
                        readonly: true
                    },
                    village: {
                        ...state.adress.village,
                        readonly: true
                    },
                    street: {
                        ...state.adress.street,
                        readonly: true
                    },
                    building: {
                        ...state.adress.building,
                        object: action.building,
                        extra:action.building.extra,
                        readonly: true
                    },
                    apartment: {
                        ...state.adress.apartment,
                        readonly: false
                    }
                }
            }
        case BUILDING_RESET:
            return {
                ...state,
                adress:{
                    ...state.adress,
                    settlement: {
                        ...state.adress.settlement,
                        readonly: false
                    },
                    village: {
                        ...state.adress.village,
                        readonly: false
                    },
                    street: {
                        ...state.adress.street,
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        object: '',
                        suggestObject:[],
                        extra:'',
                        value:'',
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    }
                }
            }
        case APARTMENT_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
                    apartment: {
                        ...state.adress.apartment,
                        object: action.apartment,
                        readonly: true
                    }
                }
            }
        case APARTMENT_RESET:
            return {
                ...state,
                adress:{
                    ...state.adress,
                    settlement: {
                        ...state.adress.settlement,
                        readonly: false
                    },
                    village: {
                        ...state.adress.village,
                        readonly: false
                    },
                    street: {
                        ...state.adress.street,
                        readonly: false
                    },
                    building: {
                        ...state.adress.building,
                        readonly: false
                    },
                    apartment: {
                        ...state.adress.apartment,
                        object: '',
                        suggestObject:[],
                        value:'',
                        readonly: false
                    }
                }
            }
        case SET_OBJECT:
            let myType = action.contentType
            return {
                ...state,
                adress: {
                    ...state.adress,
                    [myType]: {
                        ...state.adress[myType],
                        suggestObject: action.objects
                    }
                }
            }
        case SET_VALUE:
            let myName = action.contentType
            const ret = {
                ...state,
                adress: {
                    ...state.adress,
                    [myName]: {
                        ...state.adress[myName],
                        value: action.value
                    }
                }
            }
            return ret
        case RESET_VALUE:
            return {
                ...resetToStart,
                post_Index:''
            }
        case SET_INDEX_VALUE:
            return {
                ...state,
                post_Index: action.index
            }
        default:
            return state;
    }
}






export default testFiasReducer;