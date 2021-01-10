const REGION_CHANGE = 'REGION_CHANGE';
const DISTRICT_CHANGE = 'DISTRICT_CHANGE';
const CITY_CHANGE = 'CITY_CHANGE';
const SETTLEMENT_CHANGE = 'SETTLEMENT_CHANGE';
const VILLAGE_CHANGE = 'VILLAGE_CHANGE';
const STREET_CHANGE = 'STREET_CHANGE';
const BUILDING_CHANGE = 'BUILDING_CHANGE';
const APARTAMENT_CHANGE = 'APARTAMENT_CHANGE';
const SET_VALUE = 'SET_VALUE';
const RESET_VALUE = 'RESET_VALUE';
const SET_OBJECT = 'SET_OBJECT';
const SET_INDEX_VALUE = 'SET_INDEX_VALUE'


const regionChange = (region) => ({ type: REGION_CHANGE, region });
const districtChange = (district) => ({ type: DISTRICT_CHANGE, district });
const cityChange = (city) => ({ type: CITY_CHANGE, city });
const streetChange = (street) => ({ type: STREET_CHANGE, street });
const settlementChange = (settlement) => ({ type: SETTLEMENT_CHANGE, settlement });
const villageChange = (village) => ({ type: VILLAGE_CHANGE, village });
const buildingChange = (building) => ({ type: BUILDING_CHANGE, building });
const apartmentChange = (apartment) => ({ type: APARTAMENT_CHANGE, apartment });
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
            setValue
        }
    },
    index: ''
}

const testFiasReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGION_CHANGE:
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
                    }
                }
            }
        case VILLAGE_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
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
        case BUILDING_CHANGE:
            return {
                ...state,
                adress: {
                    ...state.adress,
                    // street: {
                    //     ...state.adress.street,
                    //     readonly: true
                    // },
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
        case APARTAMENT_CHANGE:
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
                ...state,
                adress: {
                    ...state.adress,
                    region: {
                        ...state.adress.region,
                        readonly: false,
                        object: '',
                        value: ''
                    },
                    district: {
                        ...state.adress.district,
                        readonly: true,
                        object: '',
                        value: ''
                    },
                    city: {
                        ...state.adress.city,
                        readonly: true,
                        object: '',
                        value: ''
                    },
                    settlement: {
                        ...state.adress.settlement,
                        readonly: true,
                        object: '',
                        value: ''
                    },
                    village: {
                        ...state.adress.village,
                        readonly: true,
                        object: '',
                        value: ''
                    },
                    street: {
                        ...state.adress.street,
                        readonly: true,
                        object: '',
                        value: ''
                    },
                    building: {
                        ...state.adress.building,
                        readonly: true,
                        object: '',
                        extra:'',
                        value: ''
                    },
                    apartment: {
                        ...state.adress.apartment,
                        readonly: true,
                        object: '',
                        value: ''
                    }
                },
                index:''
            }
        case SET_INDEX_VALUE:
            return {
                ...state,
                index: action.index
            }

        default:
            return state;
    }
}






export default testFiasReducer;