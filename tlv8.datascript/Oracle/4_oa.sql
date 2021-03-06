-- Create table
create table OA_DC_RECVDOC
(
  FID                VARCHAR2(32) not null,
  VERSION            NUMBER,
  FDOCNUMBER         VARCHAR2(100),
  FTITLE             VARCHAR2(150),
  FDOCSOURCEDEPT     VARCHAR2(100),
  FDOCSOURCEDATE     DATE,
  FDOCCOPIES         NUMBER,
  FPAGECOUNT         VARCHAR2(10),
  FDOCTYPE           VARCHAR2(100),
  FURGENCY           VARCHAR2(10),
  FCONFIDENTIALITY   VARCHAR2(10),
  FDOCRECVNO         VARCHAR2(100),
  FDOCRECVDATE       DATE,
  FREMARK            VARCHAR2(2000),
  FATTACHMENT        VARCHAR2(2000),
  FCREATEOGNID       VARCHAR2(32),
  FCREATEOGNNAME     VARCHAR2(64),
  FCREATEDEPTID      VARCHAR2(32),
  FCREATEDEPTNAME    VARCHAR2(64),
  FCREATEPOSID       VARCHAR2(32),
  FCREATEPOSNAME     VARCHAR2(64),
  FCREATEPERSONID    VARCHAR2(32),
  FCREATEPERSONNAME  VARCHAR2(64),
  FCREATEPERSONFID   VARCHAR2(512),
  FCREATEPERSONFNAME VARCHAR2(1024),
  FCREATETIME        DATE
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_DC_RECVDOC
  add constraint OA_DC_RECVDOC_KEY primary key (FID);
  
-- Create table
create table OA_DC_SENDDOC
(
  FID                VARCHAR2(32) not null,
  VERSION            NUMBER,
  FTITLE             VARCHAR2(150),
  FTYPE              VARCHAR2(100),
  FDOCNUMBER         VARCHAR2(100),
  FURGENCY           VARCHAR2(10),
  FCONFIDENTIALITY   VARCHAR2(10),
  FPAGECOUNT         VARCHAR2(10),
  FPRINTCOUNT        VARCHAR2(10),
  FMAINDEPT          VARCHAR2(2000),
  FCOPYDEPT          VARCHAR2(2000),
  FSENDDATE          DATE,
  FCREATEOGNID       VARCHAR2(32),
  FCREATEOGNNAME     VARCHAR2(64),
  FCREATEDEPTID      VARCHAR2(32),
  FCREATEDEPTNAME    VARCHAR2(64),
  FCREATEPOSID       VARCHAR2(32),
  FCREATEPOSNAME     VARCHAR2(64),
  FCREATEPERSONID    VARCHAR2(32),
  FCREATEPERSONNAME  VARCHAR2(64),
  FCREATEPERSONFID   VARCHAR2(512),
  FCREATEPERSONFNAME VARCHAR2(1024),
  FCREATETIME        DATE,
  FATTACHMENT        VARCHAR2(4000),
  FDOCFILE           VARCHAR2(1000)
);
-- Add comments to the columns 
comment on column OA_DC_SENDDOC.FTITLE
  is '??????';
comment on column OA_DC_SENDDOC.FTYPE
  is '????????????';
comment on column OA_DC_SENDDOC.FDOCNUMBER
  is '??????';
comment on column OA_DC_SENDDOC.FURGENCY
  is '??????';
comment on column OA_DC_SENDDOC.FPRINTCOUNT
  is '????????????';
comment on column OA_DC_SENDDOC.FMAINDEPT
  is '??????';
comment on column OA_DC_SENDDOC.FCOPYDEPT
  is '??????';
comment on column OA_DC_SENDDOC.FSENDDATE
  is '????????????';
comment on column OA_DC_SENDDOC.FATTACHMENT
  is '??????';
comment on column OA_DC_SENDDOC.FDOCFILE
  is '??????';
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_DC_SENDDOC
  add constraint OA_DC_SENDDOC_KEY primary key (FID);

-- Create table
create table OA_EM_RECEIVEEMAIL
(
  FID            VARCHAR2(100) not null,
  VERSION        NUMBER,
  FEMAILNAME     VARCHAR2(100),
  FTEXT          CLOB,
  FFJID          VARCHAR2(4000),
  FSENDPERNAME   VARCHAR2(100),
  FSENDPERID     VARCHAR2(100),
  FREPLYSTATE    VARCHAR2(100),
  FQUREY         VARCHAR2(100),
  FCONSIGNEE     VARCHAR2(100),
  FCONSIGNEEID   VARCHAR2(100),
  FCONSIGNEECODE VARCHAR2(100),
  FSENDTIME      DATE,
  FSENDPERCODE   VARCHAR2(100),
  FSENDOGN       VARCHAR2(100),
  FSENDDEPT      VARCHAR2(100),
  FCOLLECT       VARCHAR2(10) DEFAULT '0'
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_EM_RECEIVEEMAIL
  add constraint OA_EM_RECEIVEEMAIL_KEY primary key (FID);

-- Create table
create table OA_EM_SENDEMAIL
(
  FID            VARCHAR2(100) not null,
  VERSION        NUMBER,
  FEMAILNAME     VARCHAR2(200),
  FCONSIGNEE     CLOB,
  FTEXT          CLOB,
  FSTATE         VARCHAR2(100),
  FCONSIGNEEID   CLOB,
  FCONSIGNEECODE CLOB,
  FFJID          VARCHAR2(4000),
  FSENDPERNAME   VARCHAR2(100),
  FSENDPERID     VARCHAR2(100),
  FCREATTIME     DATE,
  FSENDTIME      DATE,
  FSENDPERCODE   VARCHAR2(100),
  FSENDOGN       VARCHAR2(100),
  FSENDDEPT      VARCHAR2(100),
  FCOLLECT       VARCHAR2(10) DEFAULT '0'
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_EM_SENDEMAIL
  add constraint OA_EM_SENDEMAIL_KEY primary key (FID);

-- Create table
create table OA_FLOWCONCLUSION
(
  FID             VARCHAR2(32),
  FCONCLUSIONNAME VARCHAR2(4000),
  FORDER          INTEGER,
  FCREATORID      VARCHAR2(100),
  FCREATOR        VARCHAR2(100),
  VERSION         INTEGER
);
-- Add comments to the columns 
comment on column OA_FLOWCONCLUSION.FCONCLUSIONNAME
  is '????????????';
comment on column OA_FLOWCONCLUSION.FORDER
  is '??????';
comment on column OA_FLOWCONCLUSION.FCREATORID
  is '?????????ID';
comment on column OA_FLOWCONCLUSION.FCREATOR
  is '?????????';
  
-- Create table
create table OA_FLOWRECORD
(
  FID             VARCHAR2(32) not null,
  FNODENAME       VARCHAR2(100),
  FAGREETEXT      VARCHAR2(4000),
  FCREATEPERNAME  VARCHAR2(100),
  FCREATEDEPTNAME VARCHAR2(100),
  FCREATETIME     DATE,
  FBILLID         VARCHAR2(32),
  FCREATEDEPTID   VARCHAR2(100),
  FCREATEPERID    VARCHAR2(100),
  FNODEID         VARCHAR2(100),
  VERSION         INTEGER,
  FOPVIEWID       VARCHAR2(100),
  FTASKID         VARCHAR2(100),
  FFLOWID         VARCHAR2(100),
  FSIGN           clob
);
-- Add comments to the columns 
comment on column OA_FLOWRECORD.FNODENAME
  is '????????????';
comment on column OA_FLOWRECORD.FAGREETEXT
  is '????????????';
comment on column OA_FLOWRECORD.FCREATEPERNAME
  is '?????????';
comment on column OA_FLOWRECORD.FCREATEDEPTNAME
  is '????????????';
comment on column OA_FLOWRECORD.FCREATETIME
  is '????????????';
comment on column OA_FLOWRECORD.FBILLID
  is '??????ID';
comment on column OA_FLOWRECORD.FCREATEDEPTID
  is '??????ID';
comment on column OA_FLOWRECORD.FCREATEPERID
  is '??????ID';
comment on column OA_FLOWRECORD.FNODEID
  is '????????????';
comment on column OA_FLOWRECORD.FOPVIEWID
  is '????????????div id';
comment on column OA_FLOWRECORD.FTASKID
  is '??????id';
comment on column OA_FLOWRECORD.FFLOWID
  is '??????id';
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_FLOWRECORD
  add constraint OA_FLOWRECORD_KEY primary key (FID);
  
-- Create table
create table OA_KM_KNOWLEDGE
(
  FID             VARCHAR2(36) not null,
  VERSION         NUMBER,
  FCREATEOGNID    VARCHAR2(36),
  FCREATEOGNNAME  VARCHAR2(64),
  FCREATEDEPTID   VARCHAR2(36),
  FCREATEDEPTNAME VARCHAR2(64),
  FCREATEPSNID    VARCHAR2(36),
  FCREATEPSNNAME  VARCHAR2(64),
  FCREATETIME     DATE,
  FNOTICETYPE     VARCHAR2(30),
  FSENDTYPE       NUMBER,
  FPOSTEDRANGE    VARCHAR2(4000),
  FTITLE          VARCHAR2(200),
  FSENDDATE       DATE,
  FCONTENT        VARCHAR2(4000),
  FATTACHMENT     CLOB,
  FSENDSTATUS     NUMBER,
  FDEPTCHECK      VARCHAR2(4000),
  FOFFICECHECK    VARCHAR2(4000),
  FLEADERCHECK    VARCHAR2(4000),
  FPOSTEDRANGEID  VARCHAR2(4000)
);
-- Add comments to the table 
comment on table OA_KM_KNOWLEDGE
  is '????????????';
-- Add comments to the columns 
comment on column OA_KM_KNOWLEDGE.FNOTICETYPE
  is '??????????????????';
comment on column OA_KM_KNOWLEDGE.FSENDTYPE
  is '????????????';
comment on column OA_KM_KNOWLEDGE.FPOSTEDRANGE
  is '????????????';
comment on column OA_KM_KNOWLEDGE.FTITLE
  is '??????';
comment on column OA_KM_KNOWLEDGE.FSENDDATE
  is '????????????';
comment on column OA_KM_KNOWLEDGE.FCONTENT
  is '??????';
comment on column OA_KM_KNOWLEDGE.FATTACHMENT
  is '??????';
comment on column OA_KM_KNOWLEDGE.FSENDSTATUS
  is '????????????:0????????????1??????';
comment on column OA_KM_KNOWLEDGE.FDEPTCHECK
  is '??????????????????';
comment on column OA_KM_KNOWLEDGE.FOFFICECHECK
  is '?????????????????????';
comment on column OA_KM_KNOWLEDGE.FLEADERCHECK
  is '????????????????????????';
comment on column OA_KM_KNOWLEDGE.FPOSTEDRANGEID
  is '????????????ID';
  
-- Create table
create table OA_KM_KNOWLEDGERANGE
(
  FID           VARCHAR2(32),
  FBILLID       VARCHAR2(32),
  FFULLID       VARCHAR2(1024),
  FFULLNAME     VARCHAR2(1024),
  FCREATORID    VARCHAR2(100),
  FCREATOR      VARCHAR2(100),
  FCREATEDEPTID VARCHAR2(100),
  FCREATEDEPT   VARCHAR2(100),
  FCREATEDATE   DATE,
  VERSION       INTEGER,
  FNAME         VARCHAR2(100)
);
-- Add comments to the columns 
comment on column OA_KM_KNOWLEDGERANGE.FID
  is '??????';
comment on column OA_KM_KNOWLEDGERANGE.FBILLID
  is '????????????';
comment on column OA_KM_KNOWLEDGERANGE.FFULLID
  is '??????FID';
comment on column OA_KM_KNOWLEDGERANGE.FFULLNAME
  is '????????????';
comment on column OA_KM_KNOWLEDGERANGE.FCREATORID
  is '?????????ID';
comment on column OA_KM_KNOWLEDGERANGE.FCREATOR
  is '?????????';
comment on column OA_KM_KNOWLEDGERANGE.FCREATEDEPTID
  is '????????????ID';
comment on column OA_KM_KNOWLEDGERANGE.FCREATEDEPT
  is '????????????';
comment on column OA_KM_KNOWLEDGERANGE.FCREATEDATE
  is '????????????';
comment on column OA_KM_KNOWLEDGERANGE.FNAME
  is '??????';
  
-- Create table
create table OA_NOTICE_PERSON
(
  FID             VARCHAR2(64) not null,
  VERSION         INTEGER,
  FOGNID          VARCHAR2(64),
  FOGNNAME        VARCHAR2(200),
  FORGID          VARCHAR2(64),
  FORGNAME        VARCHAR2(200),
  FCREATEID       VARCHAR2(64),
  FCREATENAME     VARCHAR2(200),
  FCREATEDATETIME DATE,
  FPERSONID       VARCHAR2(64),
  FPERSONNAME     VARCHAR2(200),
  FREADDATE       DATE,
  FPERSONFNAME    VARCHAR2(500),
  FMAINID         VARCHAR2(64),
  FBROWSE         NVARCHAR2(5),
  FDEPTNAME       VARCHAR2(100),
  FDEPTID         VARCHAR2(100)
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_NOTICE_PERSON
  add constraint OA_NOTICE_PERSON_KEY primary key (FID);
  
-- Create table
create table OA_PUB_DOCPIGEONHOLE
(
  FID           VARCHAR2(32) not null,
  FNAME         VARCHAR2(100),
  FPARENTID     VARCHAR2(32),
  FTABLENAME    VARCHAR2(100),
  FBILLID       VARCHAR2(32),
  FURL          VARCHAR2(1024),
  FCREATEDEPT   VARCHAR2(100),
  FCREATEDEPTID VARCHAR2(100),
  FCREATOR      VARCHAR2(100),
  FCREATORID    VARCHAR2(100),
  FCREATEDATE   DATE default sysdate,
  VERSION       INTEGER default 0,
  FFID          VARCHAR2(1024),
  FFNAME        VARCHAR2(1024)
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_PUB_DOCPIGEONHOLE
  add constraint OA_PUB_DOCPIGEONHOLE_KEY primary key (FID);

-- Create table
create table OA_PUB_DOCPIGPERM
(
  FID           VARCHAR2(32) not null,
  FFOLDERID     VARCHAR2(100),
  FPERGORGFID   VARCHAR2(1024),
  FPERGORG      VARCHAR2(1024),
  FJURISDICTION NUMBER,
  FCREATORID    VARCHAR2(100),
  FCREATOR      VARCHAR2(100),
  FCREATEDEPTID VARCHAR2(100),
  FCREATEDEPT   VARCHAR2(100),
  FCREATEDATE   DATE,
  VERSION       INTEGER
);
-- Add comments to the table 
comment on table OA_PUB_DOCPIGPERM
  is '??????????????????';
-- Add comments to the columns 
comment on column OA_PUB_DOCPIGPERM.FFOLDERID
  is '??????ID';
comment on column OA_PUB_DOCPIGPERM.FPERGORGFID
  is '??????orgfid';
comment on column OA_PUB_DOCPIGPERM.FPERGORG
  is '??????org';
comment on column OA_PUB_DOCPIGPERM.FJURISDICTION
  is '??????';
comment on column OA_PUB_DOCPIGPERM.FCREATORID
  is '?????????ID';
comment on column OA_PUB_DOCPIGPERM.FCREATOR
  is '?????????';
comment on column OA_PUB_DOCPIGPERM.FCREATEDEPTID
  is '????????????ID';
comment on column OA_PUB_DOCPIGPERM.FCREATEDEPT
  is '????????????';
comment on column OA_PUB_DOCPIGPERM.FCREATEDATE
  is '????????????';
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_PUB_DOCPIGPERM
  add constraint OA_PUB_DOCPIGPERM_KEY primary key (FID);
  
-- Create table
create table OA_PULICNOTICE
(
  FID             VARCHAR2(64) not null,
  VERSION         INTEGER,
  FOGNID          VARCHAR2(64),
  FOGNNAME        VARCHAR2(200),
  FORGID          VARCHAR2(64),
  FORGNAME        VARCHAR2(200),
  FCREATEID       VARCHAR2(64),
  FCREATENAME     VARCHAR2(200),
  FCREATEDATETIME DATE,
  FPUSHDATETIME   DATE,
  FTITLE          VARCHAR2(200),
  FCONTENT        CLOB,
  FCREATEDATE     DATE,
  FPUSHID         VARCHAR2(64),
  FPUSHNAME       VARCHAR2(200),
  FTYPE           VARCHAR2(100),
  FATTFILE        VARCHAR2(400)
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_PULICNOTICE
  add constraint OA_PULICNOTICE_KEY primary key (FID);
  
create table OA_RE_DAYREPORT
(
  FID                VARCHAR2(64),
  VERSION            NUMBER,
  FTITLE             VARCHAR2(1024),
  FCREATEOGNID       VARCHAR2(64),
  FCREATEOGNNAME     VARCHAR2(200),
  FCREATEDEPTID      VARCHAR2(64),
  FCREATEDEPTNAME    VARCHAR2(200),
  FCREATEPOSID       VARCHAR2(64),
  FCREATEPOSNAME     VARCHAR2(200),
  FCREATEPERSONID    VARCHAR2(64),
  FCREATEPERSONNAME  VARCHAR2(200),
  FCREATEPERSONFID   VARCHAR2(1024),
  FCREATEPERSONFNAME VARCHAR2(2048),
  FCREATETIME        DATE,
  FPUSHDATETIME      DATE,
  FFILE              VARCHAR2(1000),
  FCONTEXT           CLOB
);
alter table OA_RE_DAYREPORT
  add constraint OA_RE_DAYREPORT_KEY primary key (FID);
  
create table OA_RE_DAYREPORTDETAIL
(
  FID             VARCHAR2(100),
  VERSION         NUMBER,
  FMASTERID       VARCHAR2(100),
  FCONTENT        CLOB,
  FPLANDATE       DATE,
  FOTHERPERSON    VARCHAR2(2000),
  FCOMPLETE       VARCHAR2(1024),
  FREMARK         VARCHAR2(1024),
  FCOMPLETEREMARK VARCHAR2(1024),
  FCREATETIME     DATE
);
alter table OA_RE_DAYREPORTDETAIL
  add constraint OA_RE_DAYREPORTDETAIL_KEY primary key (FID);
  
create table OA_RE_MONTHREPORT
(
  FID                VARCHAR2(100),
  VERSION            INTEGER,
  FTITLE             VARCHAR2(1000),
  FCREATEOGNID       VARCHAR2(64),
  FCREATEOGNNAME     VARCHAR2(200),
  FCREATEDEPTID      VARCHAR2(64),
  FCREATEDEPTNAME    VARCHAR2(200),
  FCREATEPOSID       VARCHAR2(64),
  FCREATEPOSNAME     VARCHAR2(200),
  FCREATEPERSONID    VARCHAR2(64),
  FCREATEPERSONNAME  VARCHAR2(200),
  FCREATEPERSONFID   VARCHAR2(1024),
  FCREATEPERSONFNAME VARCHAR2(1024),
  FCREATETIME        DATE,
  FPUSHDATETIME      DATE,
  FFILE              VARCHAR2(1000),
  FCONTEXT           CLOB
);
alter table OA_RE_MONTHREPORT
  add constraint OA_RE_MONTHREPORT_KEY primary key (FID);
  
create table OA_RE_WEEKREPORT
(
  FID                VARCHAR2(100),
  VERSION            NUMBER,
  FTITLE             VARCHAR2(1000),
  FCREATEOGNID       VARCHAR2(64),
  FCREATEOGNNAME     VARCHAR2(200),
  FCREATEDEPTID      VARCHAR2(64),
  FCREATEDEPTNAME    VARCHAR2(200),
  FCREATEPOSID       VARCHAR2(64),
  FCREATEPOSNAME     VARCHAR2(200),
  FCREATEPERSONID    VARCHAR2(64),
  FCREATEPERSONNAME  VARCHAR2(200),
  FCREATEPERSONFID   VARCHAR2(1024),
  FCREATEPERSONFNAME VARCHAR2(1024),
  FCREATETIME        DATE,
  FPUSHDATETIME      DATE,
  FFILE              VARCHAR2(1000),
  FCONTEXT           CLOB
);
alter table OA_RE_WEEKREPORT
  add constraint OA_RE_WEEKREPORT_KEY primary key (FID);
  
create table OA_RE_WEEKREPORTDETAIL
(
  FID             VARCHAR2(4000),
  VERSION         NUMBER,
  FMASTERID       VARCHAR2(4000),
  FCONTENT        VARCHAR2(4000),
  FPLANDATE       DATE,
  FOTHERPERSON    VARCHAR2(4000),
  FCOMPLETE       VARCHAR2(4000),
  FREMARK         VARCHAR2(4000),
  FCOMPLETEREMARK VARCHAR2(4000),
  FCREATETIME     DATE
);
alter table OA_RE_WEEKREPORTDETAIL
  add constraint OA_RE_WEEKREPORTDETAIL_KEY primary key (FID);
  
create table OA_WORK_PLAN_PERSON
(
  FID             VARCHAR2(4000),
  VERSION         NUMBER,
  FOGNID          VARCHAR2(4000),
  FOGNNAME        VARCHAR2(4000),
  FORGID          VARCHAR2(4000),
  FORGNAME        VARCHAR2(4000),
  FCREATEID       VARCHAR2(4000),
  FCREATENAME     VARCHAR2(4000),
  FCREATEDATETIME DATE,
  FPERSONID       VARCHAR2(4000),
  FPERSONNAME     VARCHAR2(4000),
  FREADDATE       DATE,
  FPERSONFNAME    VARCHAR2(4000),
  FMAINID         VARCHAR2(4000),
  FBROWSE         VARCHAR2(2000),
  FOPINION        VARCHAR2(4000)
);
alter table OA_WORK_PLAN_PERSON
  add constraint OA_WORK_PLAN_PERSON_KEY primary key (FID);
  
create table OA_WP_MONTHPLAN
(
  FID                    VARCHAR2(100) not null,
  VERSION                INTEGER,
  FOGNID                 VARCHAR2(64),
  FOGNNAME               VARCHAR2(200),
  FORGID                 VARCHAR2(64),
  FORGNAME               VARCHAR2(200),
  FCREATEID              VARCHAR2(64),
  FCREATENAME            VARCHAR2(200),
  FCREATEDATETIME        DATE,
  FPUSHDATETIME          DATE,
  FPUSHID                VARCHAR2(64),
  FPUSHNAME              VARCHAR2(200),
  FTARGETFINISHCONDITION VARCHAR2(100),
  FUNFINISHEDCAUSE       VARCHAR2(100),
  FWINTHROUGHMETHOD      VARCHAR2(100),
  FINNOVATEHARVEST       VARCHAR2(100),
  FTITLE                 VARCHAR2(200),
  PLANPERSON             VARCHAR2(50)
);
alter table OA_WP_MONTHPLAN
  add constraint OA_WP_MONTHPLAN_KEY primary key (FID);
  
create table OA_WP_MONTHPLAN_DETAIL
(
  FID                VARCHAR2(100),
  VERSION            NUMBER,
  FOGNID             VARCHAR2(64),
  FOGNNAME           VARCHAR2(200),
  FORGID             VARCHAR2(64),
  FORGNAME           VARCHAR2(200),
  FCREATEID          VARCHAR2(64),
  FCREATENAME        VARCHAR2(200),
  FCREATEDATETIME    DATE,
  FSIGNIFICANCEGRADE VARCHAR2(100),
  FTARGETCONTENT     VARCHAR2(200),
  FMETHODMEASURE     VARCHAR2(200),
  FACCOMPLISH        VARCHAR2(100),
  FMAINID            VARCHAR2(100),
  FOPINION           VARCHAR2(100),
  FORDERTIME         DATE,
  FCOMPLETE          VARCHAR2(100)
);
alter table OA_WP_MONTHPLAN_DETAIL
  add constraint OA_WP_MONTHPLAN_DETAIL_KEY primary key (FID);
  
create table OA_WP_WEEKPLAN
(
  FID             VARCHAR2(100),
  VERSION         NUMBER,
  FOGNID          VARCHAR2(64),
  FOGNNAME        VARCHAR2(200),
  FORGID          VARCHAR2(64),
  FORGNAME        VARCHAR2(200),
  FCREATEID       VARCHAR2(64),
  FCREATENAME     VARCHAR2(200),
  FCREATEDATETIME DATE,
  FPUSHDATETIME   DATE,
  FPUSHID         VARCHAR2(100),
  FPUSHNAME       VARCHAR2(200),
  FTITLE          VARCHAR2(1000),
  STARTTIME       DATE,
  FINISHTIME      DATE,
  PLANPERSON      VARCHAR2(100),
  FAPPROVALPSNID  VARCHAR2(100),
  FCONTENT        CLOB
);
alter table OA_WP_WEEKPLAN
  add constraint OA_WP_WEEKPLAN_KEY primary key (FID);
  
create table OA_WP_WEEKPLAN_DETAIL
(
  FID                   VARCHAR2(100) not null,
  VERSION               INTEGER,
  FOGNID                VARCHAR2(64),
  FOGNNAME              VARCHAR2(200),
  FORGID                VARCHAR2(64),
  FORGNAME              VARCHAR2(200),
  FCREATEID             VARCHAR2(64),
  FCREATENAME           VARCHAR2(200),
  FCREATEDATETIME       DATE,
  MONTHLY               VARCHAR2(50),
  PROJECTNAME           VARCHAR2(100),
  SERIALNUMBER          VARCHAR2(20),
  JOBCONTENT            VARCHAR2(200),
  DEPARTMENTCOOPERATION VARCHAR2(200),
  COMPLETIONEVALUATION  VARCHAR2(200),
  COMPLETECONDITION     VARCHAR2(50),
  UNFINISHEDCAUSE       VARCHAR2(200),
  AUDITOR               VARCHAR2(20),
  MAINID                VARCHAR2(100),
  STARTTIME             DATE,
  FINISHTIME            DATE,
  SORT                  NUMBER,
  PLANTYPE              VARCHAR2(20),
  FCONTENT              VARCHAR2(50),
  ACCOMPLISH            VARCHAR2(50),
  FCOMPLETTIME          DATE,
  FIMPORTANT            VARCHAR2(100)
);
alter table OA_WP_WEEKPLAN_DETAIL
  add constraint OA_WP_WEEKPLAN_DETAIL_KEY primary key (FID);
  
-- Create table
create table OA_PUB_EXECUTE
(
  FID             varchar2(32) not null,
  FMASTERID       varchar2(100),
  FTASKID         varchar2(100),
  FACTIVITYNAME   varchar2(500),
  FACTIVITYLABEL  varchar2(1000),
  FOPINION        varchar2(1024),
  FSTATE          varchar2(100),
  FSTATENAME      varchar2(100),
  FCREATEPSNID    varchar2(64),
  FCREATEPSNNAME  varchar2(100),
  FCREATEPSNFID   varchar2(1024),
  FCREATEPSNFNAME varchar2(2048),
  FCREATETIME     date,
  VERSION         number
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_PUB_EXECUTE
  add constraint OA_PUB_EXECUTE_key primary key (FID);
  
-- Create table
create table OA_DOC_REDHEADPERM
(
  FID           VARCHAR2(32) not null,
  FTYPE         VARCHAR2(100),
  FNAME         VARCHAR2(100),
  FRHFILE       VARCHAR2(1024),
  FOGNID        VARCHAR2(100),
  FOGNNAME      VARCHAR2(100),
  FCREATORID    VARCHAR2(100),
  FCREATOR      VARCHAR2(100),
  FCREATEDEPTID VARCHAR2(100),
  FCREATEDEPT   VARCHAR2(100),
  FCREATEDATE   DATE,
  VERSION       INTEGER
);

-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_DOC_REDHEADPERM
  add constraint OA_DOC_REDHEADPERM_key primary key (FID);
-- Create/Recreate indexes 
create index oa_redhead_ognid on OA_DOC_REDHEADPERM (FOGNID);

-- Add comments to the table 
comment on table OA_DOC_REDHEADPERM
  is '??????????????????';
-- Add comments to the columns 
comment on column OA_DOC_REDHEADPERM.FTYPE
  is '??????';
comment on column OA_DOC_REDHEADPERM.FNAME
  is '??????';
comment on column OA_DOC_REDHEADPERM.FRHFILE
  is '??????';
comment on column OA_DOC_REDHEADPERM.FOGNID
  is '??????id';
comment on column OA_DOC_REDHEADPERM.FOGNNAME
  is '????????????';
comment on column OA_DOC_REDHEADPERM.FCREATORID
  is '?????????ID';
comment on column OA_DOC_REDHEADPERM.FCREATOR
  is '?????????';
comment on column OA_DOC_REDHEADPERM.FCREATEDEPTID
  is '????????????ID';
comment on column OA_DOC_REDHEADPERM.FCREATEDEPT
  is '????????????';
comment on column OA_DOC_REDHEADPERM.FCREATEDATE
  is '????????????';
  
-- Create table
create table OA_ADM_MYGROUPFROM
(
  FID           VARCHAR2(32) not null,
  FCREATORID    VARCHAR2(100),
  FCREATOR      VARCHAR2(100),
  FCREATEDEPTID VARCHAR2(100),
  FCREATEDEPT   VARCHAR2(100),
  FCREATEDATE   DATE,
  FOUTKEY       VARCHAR2(32),
  FPERSONID     VARCHAR2(32),
  FPERSONNAME   VARCHAR2(200),
  VERSION       INTEGER
);
alter table OA_ADM_MYGROUPFROM
  add constraint OA_ADM_MYGROUPFROM_key primary key (FID);
-- Add comments to the columns 
comment on column OA_ADM_MYGROUPFROM.FCREATORID
  is '?????????ID';
comment on column OA_ADM_MYGROUPFROM.FCREATOR
  is '?????????';
comment on column OA_ADM_MYGROUPFROM.FCREATEDEPTID
  is '???????????????ID';
comment on column OA_ADM_MYGROUPFROM.FCREATEDEPT
  is '???????????????';
comment on column OA_ADM_MYGROUPFROM.FCREATEDATE
  is '??????????????????';
comment on column OA_ADM_MYGROUPFROM.FOUTKEY
  is '??????';
comment on column OA_ADM_MYGROUPFROM.FPERSONID
  is '?????????ID';
comment on column OA_ADM_MYGROUPFROM.FPERSONNAME
  is '???????????????';
  
-- Create table
create table OA_ADM_MYGROUPMAIN
(
  FID           VARCHAR2(32) not null,
  FCREATORID    VARCHAR2(100),
  FCREATOR      VARCHAR2(100),
  FCREATEDEPTID VARCHAR2(100),
  FCREATEDEPT   VARCHAR2(100),
  FCREATEDATE   DATE,
  FGROUPNAME    VARCHAR2(200),
  VERSION       INTEGER
);
alter table OA_ADM_MYGROUPMAIN
  add constraint OA_ADM_MYGROUPMAIN_key primary key (FID);
-- Add comments to the columns 
comment on column OA_ADM_MYGROUPMAIN.FCREATORID
  is '?????????ID';
comment on column OA_ADM_MYGROUPMAIN.FCREATOR
  is '?????????';
comment on column OA_ADM_MYGROUPMAIN.FCREATEDEPTID
  is '???????????????ID';
comment on column OA_ADM_MYGROUPMAIN.FCREATEDEPT
  is '???????????????';
comment on column OA_ADM_MYGROUPMAIN.FCREATEDATE
  is '??????????????????';
comment on column OA_ADM_MYGROUPMAIN.FGROUPNAME
  is '????????????';
  
-- Create table
create table OA_HR_WARG
(
  FID           VARCHAR2(32) not null,
  VERSION       INTEGER,
  FCREATORID    VARCHAR2(100),
  FCREATOR      VARCHAR2(100),
  FCREATEDEPTID VARCHAR2(100),
  FCREATEDEPT   VARCHAR2(100),
  FCREATEDATE   DATE,
  FSCODE        VARCHAR2(64),
  FPERSONNEME   VARCHAR2(64),
  FPOSTWAGE     NUMBER,
  FLEVEWAGE     NUMBER,
  FBASEJX       NUMBER,
  FREFORM       NUMBER,
  FAWARDJX      NUMBER,
  FAGEWAGE      NUMBER,
  FRETURN       NUMBER,
  FONLYSON      NUMBER,
  FLEAVE        NUMBER,
  FOTHERSUM     NUMBER,
  FSHOULDPAY    NUMBER,
  FDUE          NUMBER,
  FHOUSE        NUMBER,
  FMEDICARE     NUMBER,
  FLOSSCARE     NUMBER,
  FOTHERDIV     NUMBER,
  FLOANDEBIT    NUMBER,
  FTAX          NUMBER,
  FDIVSUM       NUMBER,
  FPAYWAGE      NUMBER,
  FPAYDATE      VARCHAR2(30),
  FWAGEYEAR     NUMBER,
  FWAGEMONTH    NUMBER,
  FJIJIANBUTIE  NUMBER,
  FYEBANFEI     NUMBER,
  FBEIZHU       VARCHAR2(4000)
);
-- Add comments to the table 
comment on table OA_HR_WARG
  is '????????????';
-- Add comments to the columns 
comment on column OA_HR_WARG.FCREATORID
  is '?????????ID';
comment on column OA_HR_WARG.FCREATOR
  is '?????????';
comment on column OA_HR_WARG.FCREATEDEPTID
  is '????????????ID';
comment on column OA_HR_WARG.FCREATEDEPT
  is '????????????';
comment on column OA_HR_WARG.FCREATEDATE
  is '????????????';
comment on column OA_HR_WARG.FSCODE
  is '????????????';
comment on column OA_HR_WARG.FPERSONNEME
  is '??????';
comment on column OA_HR_WARG.FPOSTWAGE
  is '????????????';
comment on column OA_HR_WARG.FLEVEWAGE
  is '????????????';
comment on column OA_HR_WARG.FBASEJX
  is '???????????????????????????';
comment on column OA_HR_WARG.FREFORM
  is '???????????????';
comment on column OA_HR_WARG.FAWARDJX
  is '?????????????????????';
comment on column OA_HR_WARG.FAGEWAGE
  is '????????????';
comment on column OA_HR_WARG.FRETURN
  is '??????';
comment on column OA_HR_WARG.FONLYSON
  is '?????????';
comment on column OA_HR_WARG.FLEAVE
  is '?????????';
comment on column OA_HR_WARG.FOTHERSUM
  is '??????';
comment on column OA_HR_WARG.FSHOULDPAY
  is '????????????';
comment on column OA_HR_WARG.FDUE
  is '??????';
comment on column OA_HR_WARG.FHOUSE
  is '??????';
comment on column OA_HR_WARG.FMEDICARE
  is '??????';
comment on column OA_HR_WARG.FLOSSCARE
  is '??????';
comment on column OA_HR_WARG.FOTHERDIV
  is '?????????';
comment on column OA_HR_WARG.FLOANDEBIT
  is '?????????';
comment on column OA_HR_WARG.FTAX
  is '?????????';
comment on column OA_HR_WARG.FDIVSUM
  is '????????????';
comment on column OA_HR_WARG.FPAYWAGE
  is '????????????';
comment on column OA_HR_WARG.FPAYDATE
  is '??????';
comment on column OA_HR_WARG.FWAGEYEAR
  is '?????????';
comment on column OA_HR_WARG.FWAGEMONTH
  is '?????????';
comment on column OA_HR_WARG.FJIJIANBUTIE
  is '????????????';
comment on column OA_HR_WARG.FYEBANFEI
  is '?????????';
comment on column OA_HR_WARG.FBEIZHU
  is '??????';
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_HR_WARG
  add constraint OA_HR_WAGE_KEY primary key (FID);
  
CREATE TABLE oa_test1  (
  FID varchar2(32) NOT NULL,
  FMINGCHENG varchar2(100),
  VERSION int,
  CODE varchar2(200),
  SCODE varchar2(20),
  fdate date,
  fbillid varchar2(32)
);
alter table oa_test1 add primary key (FID);
  
create or replace view oa_notice_person_view as
select t.FID,
       t.VERSION,
       t.FOGNID,
       t.FOGNNAME,
       t.FORGID,
       t.FORGNAME,
       t.FCREATEID,
       t.FCREATENAME,
       t.FCREATEDATETIME,
       t.FPUSHDATETIME,
       t.FTITLE,
       t.FCONTENT,
       t.FCREATEDATE,
       t.FPUSHID,
       t.FPUSHNAME,
       t.FTYPE,
       t1.fpersonid fpersonid,
       t1.fbrowse
  from OA_PULICNOTICE t
  left join OA_NOTICE_PERSON t1 on t.fid = t1.fmainid;
  
create or replace view look_month_work_plan as
select t.fid,
       t.FPUSHDATETIME,
       t.FPUSHID,
       t.FPUSHNAME,
       t.FCREATEID,
       t.FTITLE,
       t.FCREATENAME,
       t.forgid,
       t.forgname,
       t1.fpersonname,
       t.FCREATEDATETIME,
       t1.fpersonid,
       t1.fbrowse,
       t.version
  from OA_WP_MONTHPLAN t
  left join Oa_Work_Plan_Person t1
    on t.fid = t1.fmainid;
	
create or replace view look_week_work_plan as
select t.fid,
       t.FPUSHDATETIME,
       t.FPUSHID,
       t.FPUSHNAME,
       t.FCREATEID,
       t.FTITLE,
       t.FCREATENAME,
       t.FCONTENT,
       t.STARTTIME,
       t.finishtime,
       t.forgname,
       t1.fpersonname,
       t1.fpersonid,
       t1.fbrowse,
       t.version
  from OA_WP_WEEKPLAN t
  left join Oa_Work_Plan_Person t1
    on t.fid = t1.fmainid;

create or replace view oa_re_weekreport_count as
select p.sid fid,
       p.scode fcode,
       p.sname fname,
       p.ssequence,
       count(w.fid) repnum,
       0 version
  from v8sys.sa_opperson p
  left join oa_re_weekreport w
    on p.sid = w.fcreatepersonid
 where p.svalidstate = 1
   and p.sid != 'PSN01'
 group by p.sid, p.scode, p.sname, p.ssequence
 order by p.ssequence;

create or replace view show_oa_re_dayreport as
select t.FID,
       t.VERSION,
       t.FTITLE,
       t.FCREATEOGNID,
       t.FCREATEOGNNAME,
       t.FCREATEDEPTID,
       t.FCREATEDEPTNAME,
       t.FCREATEPOSID,
       t.FCREATEPOSNAME,
       t.FCREATEPERSONID,
       t.FCREATEPERSONNAME,
       t.FCREATEPERSONFID,
       t.FCREATEPERSONFNAME,
       t.FCREATETIME,
       t.FPUSHDATETIME,
       t.FFILE,
       t1.fpersonid fpersonid,
       t1.fbrowse
  from OA_RE_DAYREPORT t
  left join OA_NOTICE_PERSON t1
    on t.fid = t1.fmainid;

create or replace view show_oa_re_monthreport as
select t.FID,
       t.VERSION,
       t.FTITLE,
       t.FCREATEOGNID,
       t.FCREATEOGNNAME,
       t.FCREATEDEPTID,
       t.FCREATEDEPTNAME,
       t.FCREATEPOSID,
       t.FCREATEPOSNAME,
       t.FCREATEPERSONID,
       t.FCREATEPERSONNAME,
       t.FCREATEPERSONFID,
       t.FCREATEPERSONFNAME,
       t.FCREATETIME,
       t.FPUSHDATETIME,
       t.FFILE,
       t1.fpersonid fpersonid,
       t1.fbrowse
  from OA_RE_MONTHREPORT t
  left join OA_NOTICE_PERSON t1
    on t.fid = t1.fmainid;

create or replace view show_oa_re_weekreport as
select t.FID,
       t.VERSION,
       t.FTITLE,
       t.FCREATEOGNID,
       t.FCREATEOGNNAME,
       t.FCREATEDEPTID,
       t.FCREATEDEPTNAME,
       t.FCREATEPOSID,
       t.FCREATEPOSNAME,
       t.FCREATEPERSONID,
       t.FCREATEPERSONNAME,
       t.FCREATEPERSONFID,
       t.FCREATEPERSONFNAME,
       t.FCREATETIME,
       t.FPUSHDATETIME,
       t.FFILE,
       t1.fpersonid fpersonid,
       t1.fbrowse
  from OA_RE_WEEKREPORT t
  left join OA_NOTICE_PERSON t1
    on t.fid = t1.fmainid; 