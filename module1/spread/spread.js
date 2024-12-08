{
    var bros1 = ['ab', 'bc', 'cd'];
    var bros2 = ['mu', 'dhfvbk', '9'];
    bros1.push.apply(bros1, bros2);
    console.log(bros1);
}
