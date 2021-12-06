import actions from "../testActions.json";

export const getActions = function() {
    return (
        actions.map(action => (
            {
                ...action,
                link: parseLinkTemplates(action.templateLink, action.inserts)
            }
        ))
    );
};

const parseLinkTemplates = function(template, inserts){
    let newLink = template;
    inserts.forEach(insert => {
        let reg = new RegExp(`\{${insert.placeholder}\}`);
        newLink = newLink.replace(reg, insert.value);
    });
    return newLink;
}
