import store from 'store';

let actionCount = 0;

let templateAction = {
    id: 0,
    name: '',
    icon: 'send',
    templateLink: 'www.{name}.com',
    inserts: [
        {
            key: 'name',
            value: 'google'
        }
    ]
}

// TODO add options to run different types of actions
export const runAction = function({templateLink, inserts}) {
    window.open(
        parseLinkTemplate(templateLink, inserts),
        "_blank"
    );
};

export const readActionsFromStore = function(){
    return JSON.parse(store.get('actions'));
};

export const writeActionsToStore = function(actions){
    store.set('actions', JSON.stringify(actions));
};

export const generateNewAction = function(){
    actionCount++;
    return {...templateAction, id: actionCount};
}

const parseLinkTemplate = function(template, inserts){
    let newLink = template;
    inserts.forEach(insert => {
        let reg = new RegExp(`\{${insert.key}\}`);
        newLink = newLink.replace(reg, insert.value);
    });
    return newLink;
}

