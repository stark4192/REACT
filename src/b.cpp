#include<iostream>
#include<string>
using namespace std;


class aniket{
    private:
        //int salary=2000;
    public:
    string name;
    int salary =20000;
    void take_money();
    void paisa()
    {
        cout<<name<<endl;
    }
};

void aniket::take_money()
{
    cout<<salary;
}

class arpita{
    
};

int main()
{
aniket a1;

a1.name = "ram";


a1.paisa();
a1.take_money();

return 0;
}