export  class KBArticles {
    public constructor(
      public  ArticleId: number,
      public  ArticleName: string,
      public  Content: string,
      public  PreviewContent: string,
      public  CategoryId: number,
      public  CategoryName: string,
      public  CreatedBy: number,
      public  CreatedByName: string,
      public  CreatedDate: string,
      public  ModifiedBy: number,
      public  ModifiedByName: string,
      public  ModifiedDate: string
    ) {}
  }
