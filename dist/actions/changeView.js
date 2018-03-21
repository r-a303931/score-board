export var ChangeViewActions;
(function (ChangeViewActions) {
    ChangeViewActions[ChangeViewActions["CHANGE_VIEW"] = 0] = "CHANGE_VIEW";
})(ChangeViewActions || (ChangeViewActions = {}));
;
export default (function (view) {
    return {
        type: ChangeViewActions.CHANGE_VIEW,
        view: view
    };
});
