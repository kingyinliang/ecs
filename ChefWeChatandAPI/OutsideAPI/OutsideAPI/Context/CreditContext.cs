﻿using OutsideAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace OutsideAPI
{
    public class CreditContext : DbContext
    {
        private readonly static string CONNECTION_STRING = "CreditSys";

        public DbSet<RegistMember> Member { get; set; }
        public DbSet<OpenIdAssociated> OpenIdAssociated { get; set; }
        public DbSet<MemberIntegralDetail> MemberIntegralDetail { get; set; }
        public CreditContext()
            : base(CONNECTION_STRING)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();//移除复数表名的契约
            modelBuilder.Conventions.Remove<IncludeMetadataConvention>();//防止黑幕交易 要不然每次都要访问 EdmMetadata这个表
        }
    }
}