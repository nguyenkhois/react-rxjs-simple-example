import { BehaviorSubject } from 'rxjs';

const initialData = {
    userList: {},
    dataList: []
};

class MainStore {
    dataBehavior = new BehaviorSubject(initialData);

    getState() {
        return this.dataBehavior;
    }

    changeState(payload) {
        const currentValue = this.dataBehavior.value;
        const newValue = {
            ...currentValue, 
            dataList: currentValue.dataList.concat(payload)
        }
        
        this.dataBehavior.next(newValue);
    }
}

export default new MainStore();