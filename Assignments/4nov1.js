function evaluteGrade(grade){
    switch (true){
        case grade >= 90:
            console.log("Grade A")
            break;
            case grade >= 80:
                console.log("Grade B")
                break;
            case grade >= 70:
                console.log("Grade C")
                break;
            case grade >= 60:
                console.log("Grade D")
                break;
            default:
                console.log("Grade F")
    }
}
evaluteGrade(79);