#include <iostream>

using namespace std;

// int factorial(int n){
//                 if (n==0 || n==1){
//                         return 1;
//                 }
//                 return n * factorial(n-1);
//         }

int factorial(int n){
        if(n==0||n==1){
                return 1;
        }
        return n*factorial(n-1);
}

int main( ){

        int factz = factorial(5);
        cout<<factz;

        int fact=1, mul=10;
        for(int i =1 ; i<=mul; i++){
                cout<<"--= "<<i<<" \n";
                fact*=i;
                cout<<fact;
        }


}


