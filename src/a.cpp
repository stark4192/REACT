#include<iostream>
#include<string>
using namespace std;


class aniket{
    public:
    string name;
    void paisa()
    {
        cout<<name;
    }
};

int main()
{
aniket a1;
aniket a2;

a1.name = "ram";
a2.name = "shyam";


a1.paisa();
a2.paisa();

return 0;
}