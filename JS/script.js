$(function(){

    $("#gainKnowledgeContent").hide();
    $("#openMindContent").hide();

    $("#getInspiredButton").click(function(){
        $("#getInspiredContent").slideToggle();
    })

    $("#gainKnowledgeButton").click(function(){
        $("#gainKnowledgeContent").slideToggle();
    })

    $("#openMindButton").click(function(){
        $("#openMindContent").slideToggle();
    })

    $("#year").text(new Date().getFullYear())

    
})