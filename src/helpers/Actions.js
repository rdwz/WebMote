import store from 'store';

// TODO add options to run different types of actions
export const runAction = function({template, inserts}) {
    window.open(
        parseLinkTemplate(template, inserts),
        "_blank"
    );
};

export const readActionsFromStore = function(){
    return JSON.parse(store.get('actions'));
};

export const writeActionsToStore = function(actions){
    store.set('actions', JSON.stringify(actions));
};

const parseLinkTemplate = function(template, inserts){
    let newLink = template;
    inserts.forEach(insert => {
        let reg = new RegExp(`\{${insert.placeholder}\}`);
        newLink = newLink.replace(reg, insert.value);
    });
    return newLink;
}
