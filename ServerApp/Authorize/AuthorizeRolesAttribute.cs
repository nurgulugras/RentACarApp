using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using ServerApp.Models.Enums;
namespace ServerApp.Authorize
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class AuthorizeRolesAttribute : AuthorizeAttribute
    {
       
        public AuthorizeRolesAttribute(params RoleEnum[] roles)
        {
            var intListOfRoles = new List<int>() ;
            intListOfRoles.Add((int)RoleEnum.Admin);   
           
            if(roles!=null && roles.Count()>0){

            intListOfRoles.AddRange(Array.ConvertAll(roles, value => (int) value).ToList()); 

            }    
            Roles = String.Join(",", intListOfRoles);     
        }
    }
}