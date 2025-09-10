/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var button = document.querySelector('button[id="add"]');
var accessRadio = document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcion\u00E1rio";
})(accessOptions || (accessOptions = {}));
var accessOptionsValues = Object.values(accessOptions);
accessOptionsValues.forEach(function (value, i) {
    accessRadio.innerHTML += "\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n    <label class=\"form-check-label capitalLetter\" for=\"no\">\n      ").concat(value, "\n    </label>\n  </div>\n  ");
});
function addEmployee() {
    var content = document.getElementById('content');
    var fullName = document.querySelector('#fullName');
    var register = document.querySelector('#register');
    var admin = document.querySelector('input[name="access"]:checked');
    var active = document.querySelector('#active');
    content.innerHTML += (createLine(fullName.value, register.value, admin.value, active.checked));
}
function createLine(fullName, NrRegister, admin, active) {
    return "\n    <div class=\"card mb-1\">\n      <div class=\"card-header\">\n        ".concat(NrRegister, "\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(fullName, "</h5>\n        <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a>\n      </div>\n      <div class=\"card-footer bg-transparent border-success\">\n        Acesso: ").concat(admin, "\n      </div>\n    </div>");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVFLElBQU0sV0FBVyxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3hFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFOUMsSUFBSyxhQUlKO0FBSkQsV0FBSyxhQUFhO0lBQ2hCLGdEQUErQjtJQUMvQixvQ0FBbUI7SUFDbkIsOENBQXdCO0FBQzFCLENBQUMsRUFKSSxhQUFhLEtBQWIsYUFBYSxRQUlqQjtBQUVELElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFFeEQsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYSxFQUFFLENBQVM7SUFDbkQsV0FBVyxDQUFDLFNBQVMsSUFBSSwrSEFFcUQsQ0FBQyx3QkFBWSxLQUFLLHlGQUUxRixLQUFLLGlDQUdWO0FBQ0gsQ0FBQyxDQUFDO0FBR0YsU0FBUyxXQUFXO0lBQ2xCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFxQixDQUFDO0lBQ3JFLElBQUksUUFBUSxHQUE0QixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVFLElBQUksUUFBUSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQXFCLENBQUM7SUFDdkYsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQXFCLENBQUM7SUFFbkUsT0FBTyxDQUFDLFNBQVMsSUFBWSxDQUMzQixVQUFVLENBQUMsUUFBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUN6RSxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLFFBQWdCLEVBQ2hCLFVBQTJCLEVBQzNCLEtBQWEsRUFDYixNQUFlO0lBQ2pDLE9BQU8sc0ZBR0MsVUFBVSwrRkFHYSxRQUFRLG9FQUNLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLGtIQUd4RCxLQUFLLCtCQUVaLENBQUM7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1dHRvbiA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpZD1cImFkZFwiXScpO1xyXG5jb25zdCBhY2Nlc3NSYWRpbyA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzUmFkaW8nKTtcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRW1wbG95ZWUpO1xyXG5cclxuZW51bSBhY2Nlc3NPcHRpb25zIHtcclxuICBhZG1pbmlzdHJhdG9yID0gXCJhZG1pbmlzdHJhZG9yXCIsXHJcbiAgbWFuYWdlciA9IFwiZ2VyZW50ZVwiLFxyXG4gIGVtcGxveWVlID0gXCJmdW5jaW9uw6FyaW9cIlxyXG59XHJcblxyXG5jb25zdCBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKVxyXG5cclxuYWNjZXNzT3B0aW9uc1ZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcclxuICBhY2Nlc3NSYWRpby5pbm5lckhUTUwgKz0gYFxyXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFjY2Vzc1wiIGlkPVwiYWNjZXNzUmFkaW8ke2l9XCIgdmFsdWU9XCIke3ZhbHVlfVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbCBjYXBpdGFsTGV0dGVyXCIgZm9yPVwibm9cIj5cclxuICAgICAgJHt2YWx1ZX1cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZEVtcGxveWVlKCk6IHZvaWQge1xyXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGxldCBmdWxsTmFtZTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbE5hbWUnKTtcclxuICBsZXQgcmVnaXN0ZXIgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXInKTtcclxuICBsZXQgYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYWNjZXNzXCJdOmNoZWNrZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGxldCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWN0aXZlJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz4oXHJcbiAgICBjcmVhdGVMaW5lKGZ1bGxOYW1lIS52YWx1ZSwgcmVnaXN0ZXIudmFsdWUsIGFkbWluLnZhbHVlLCBhY3RpdmUuY2hlY2tlZClcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5lKGZ1bGxOYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgIE5yUmVnaXN0ZXI6IHN0cmluZyB8IG51bWJlciwgXHJcbiAgICAgICAgICAgICAgICAgICAgYWRtaW46IHN0cmluZywgXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQgbWItMVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAke05yUmVnaXN0ZXJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZnVsbE5hbWV9PC9oNT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+JHthY3RpdmUgPyAnQXRpdm8nIDogJ0luYXRpdm8nfTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2Vzc1wiPlxyXG4gICAgICAgIEFjZXNzbzogJHthZG1pbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9