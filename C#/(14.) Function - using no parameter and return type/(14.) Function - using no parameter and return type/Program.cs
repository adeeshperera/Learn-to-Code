using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.__Function___using_no_parameter_and_return_type
{
    internal class Program
    {
        static void Main(string[] args)
        {
            testFunction();
            testFunction();
            testFunction();
            Console.ReadLine();
        }
        static void testFunction()
        {
            Console.WriteLine("Test text");
            //A function that does not return any value specifies void type as a return type
        }
    }
}
