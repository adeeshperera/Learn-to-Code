using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15.__Function___using_parameter_but_no_return_type
{
    internal class Program
    {
        static void Main(string[] args)
        {
            testFunction("input 1");
            testFunction("input 2");
            Console.ReadLine();
        }
        static void testFunction(string testParameter)
        {
            Console.WriteLine("Test " + testParameter);
            //A function can have zero or any number of parameters to get data
        }
    }
}
