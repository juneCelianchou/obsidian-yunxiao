import type { YunxiaoApiCatalogNode } from '../types';

// Auto-generated from 所有接口信息.txt
export const EMBEDDED_API_CATALOG: YunxiaoApiCatalogNode[] = [
  {
    "alias": "/yunxiao/developer-reference/service-access-point-domain",
    "id": 2842393,
    "nodeType": 1,
    "title": "服务接入点（domain）",
    "url": "/zh/yunxiao/developer-reference/service-access-point-domain",
    "validDocument": true
  },
  {
    "alias": "/yunxiao/developer-reference/obtain-personal-access-token",
    "id": 2841293,
    "nodeType": 1,
    "title": "获取个人访问令牌",
    "url": "/zh/yunxiao/developer-reference/obtain-personal-access-token",
    "validDocument": true
  },
  {
    "alias": "/yunxiao/developer-reference/error-code-center",
    "id": 2843184,
    "nodeType": 1,
    "title": "错误码中心",
    "url": "/zh/yunxiao/developer-reference/error-code-center",
    "validDocument": true
  },
  {
    "alias": "/yunxiao/developer-reference/organization-1",
    "id": 2842006,
    "nodeType": 8,
    "title": "组织",
    "url": "/zh/yunxiao/developer-reference/organization-1/",
    "validDocument": false,
    "children": [
      {
        "alias": "/yunxiao/developer-reference/organization",
        "id": 2883199,
        "nodeType": 8,
        "title": "组织",
        "url": "/zh/yunxiao/developer-reference/organization/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listorganizations",
            "id": 2883200,
            "nodeType": 1,
            "title": "ListOrganizations - 查询组织列表",
            "url": "/zh/yunxiao/developer-reference/listorganizations",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/user-1",
        "id": 2883197,
        "nodeType": 8,
        "title": "用户",
        "url": "/zh/yunxiao/developer-reference/user-1/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/getuserbytoken",
            "id": 2883198,
            "nodeType": 1,
            "title": "GetUserByToken - 根据个人访问令牌查询对应用户信息",
            "url": "/zh/yunxiao/developer-reference/getuserbytoken",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/organization-department",
        "id": 2841167,
        "nodeType": 8,
        "title": "组织部门",
        "url": "/zh/yunxiao/developer-reference/organization-department/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/query-the-list-of-organization-departments",
            "id": 2841220,
            "nodeType": 1,
            "title": "ListDepartments - 查询组织部门列表",
            "url": "/zh/yunxiao/developer-reference/query-the-list-of-organization-departments",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getdepartment-query-organization-department-information",
            "id": 2841169,
            "nodeType": 1,
            "title": "GetDepartment - 查询组织部门信息",
            "url": "/zh/yunxiao/developer-reference/getdepartment-query-organization-department-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listdepartmentancestors-query-the-list-of-all-parent-departments-of-a-department-in-an-organization",
            "id": 2853875,
            "nodeType": 1,
            "title": "ListDepartmentAncestors - 查询组织内部门的所有父部门列表",
            "url": "/zh/yunxiao/developer-reference/listdepartmentancestors-query-the-list-of-all-parent-departments-of-a-department-in-an-organization",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/organization-members",
        "id": 2841170,
        "nodeType": 8,
        "title": "组织成员",
        "url": "/zh/yunxiao/developer-reference/organization-members/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listmembers-query-the-list-of-organization-members",
            "id": 2841222,
            "nodeType": 1,
            "title": "ListMembers - 查询成员列表",
            "url": "/zh/yunxiao/developer-reference/listmembers-query-the-list-of-organization-members",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getmember-query-member-information",
            "id": 2841171,
            "nodeType": 1,
            "title": "GetMember - 查询成员信息",
            "url": "/zh/yunxiao/developer-reference/getmember-query-member-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/readmemberbyuser-query-organization-member-information-user-id",
            "id": 2841172,
            "nodeType": 1,
            "title": "ReadMemberByUser - 查询成员信息",
            "url": "/zh/yunxiao/developer-reference/readmemberbyuser-query-organization-member-information-user-id",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/searchmembers-search-for-a-list-of-organization-members",
            "id": 2841173,
            "nodeType": 1,
            "title": "SearchMembers - 搜索成员列表",
            "url": "/zh/yunxiao/developer-reference/searchmembers-search-for-a-list-of-organization-members",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/organizational-roles",
        "id": 2841174,
        "nodeType": 8,
        "title": "组织角色",
        "url": "/zh/yunxiao/developer-reference/organizational-roles/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/lists-query-the-list-of-organization-roles",
            "id": 2841175,
            "nodeType": 1,
            "title": "ListRoles - 查询组织角色列表",
            "url": "/zh/yunxiao/developer-reference/lists-query-the-list-of-organization-roles",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getrole",
            "id": 2841176,
            "nodeType": 1,
            "title": "GetRole - 查询角色信息",
            "url": "/zh/yunxiao/developer-reference/getrole",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/organization-binding",
        "id": 2980113,
        "nodeType": 8,
        "title": "组织绑定",
        "url": "/zh/yunxiao/developer-reference/organization-binding/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/getbindinfo-get-individual-member-binding-information",
            "id": 2980114,
            "nodeType": 1,
            "title": "GetBindInfo - 获取单个成员绑定信息",
            "url": "/zh/yunxiao/developer-reference/getbindinfo-get-individual-member-binding-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listbindinfo-list-specific-types-of-binding-information-for-organization-members",
            "id": 2980120,
            "nodeType": 1,
            "title": "ListBindInfo - 列出组织成员特定类型的绑定信息",
            "url": "/zh/yunxiao/developer-reference/listbindinfo-list-specific-types-of-binding-information-for-organization-members",
            "validDocument": true
          }
        ]
      }
    ]
  },
  {
    "alias": "/yunxiao/developer-reference/codeup",
    "id": 2846141,
    "nodeType": 8,
    "title": "代码管理",
    "url": "/zh/yunxiao/developer-reference/codeup/",
    "validDocument": false,
    "children": [
      {
        "alias": "/yunxiao/developer-reference/code-library-1",
        "id": 2846143,
        "nodeType": 8,
        "title": "代码仓库",
        "url": "/zh/yunxiao/developer-reference/code-library-1/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createreposition-creates-a-code-base",
            "id": 2846145,
            "nodeType": 1,
            "title": "CreateRepository - 创建代码库",
            "url": "/zh/yunxiao/developer-reference/createreposition-creates-a-code-base",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletereposition-delete-code-base",
            "id": 2846549,
            "nodeType": 1,
            "title": "DeleteRepository - 删除代码库",
            "url": "/zh/yunxiao/developer-reference/deletereposition-delete-code-base",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getrepository-query-the-code-base",
            "id": 2846555,
            "nodeType": 1,
            "title": "GetRepository - 查询代码库",
            "url": "/zh/yunxiao/developer-reference/getrepository-query-the-code-base",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listrepositories-query-code-base-list",
            "id": 2846557,
            "nodeType": 1,
            "title": "ListRepositories - 查询代码库列表",
            "url": "/zh/yunxiao/developer-reference/listrepositories-query-code-base-list",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listtemplaterepositories-query-the-list-of-template-code-libraries",
            "id": 2846558,
            "nodeType": 1,
            "title": "ListTemplateRepositories - 查询模板代码库列表",
            "url": "/zh/yunxiao/developer-reference/listtemplaterepositories-query-the-list-of-template-code-libraries",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/code-groups",
        "id": 2846487,
        "nodeType": 8,
        "title": "代码组",
        "url": "/zh/yunxiao/developer-reference/code-groups/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/creategroup-creates-a-code-group",
            "id": 2846489,
            "nodeType": 1,
            "title": "CreateGroup - 创建代码组",
            "url": "/zh/yunxiao/developer-reference/creategroup-creates-a-code-group",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getnamespace-query-code-group-space-information",
            "id": 2846494,
            "nodeType": 1,
            "title": "GetNamespace - 查询代码组空间信息",
            "url": "/zh/yunxiao/developer-reference/getnamespace-query-code-group-space-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listnamespaces-query-the-code-group-space-list",
            "id": 2846496,
            "nodeType": 1,
            "title": "ListNamespaces - 查询代码组空间列表",
            "url": "/zh/yunxiao/developer-reference/listnamespaces-query-the-code-group-space-list",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listgrouprepostions-query-the-list-of-code-libraries-under-a-code-group",
            "id": 2999031,
            "nodeType": 1,
            "title": "ListGroupRepositories - 查询代码组下的代码库列表",
            "url": "/zh/yunxiao/developer-reference/listgrouprepostions-query-the-list-of-code-libraries-under-a-code-group",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/branch",
        "id": 2846570,
        "nodeType": 8,
        "title": "分支",
        "url": "/zh/yunxiao/developer-reference/branch/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createbranch-create-branch",
            "id": 2846571,
            "nodeType": 1,
            "title": "CreateBranch - 创建分支",
            "url": "/zh/yunxiao/developer-reference/createbranch-create-branch",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletebranch-delete-branch",
            "id": 2846574,
            "nodeType": 1,
            "title": "DeleteBranch - 删除分支",
            "url": "/zh/yunxiao/developer-reference/deletebranch-delete-branch",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getbranch-query-branch-information",
            "id": 2846575,
            "nodeType": 1,
            "title": "GetBranch - 查询分支信息",
            "url": "/zh/yunxiao/developer-reference/getbranch-query-branch-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listbranches-query-the-list-of-branches",
            "id": 2846576,
            "nodeType": 1,
            "title": "ListBranches - 查询分支列表",
            "url": "/zh/yunxiao/developer-reference/listbranches-query-the-list-of-branches",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/submission",
        "id": 2846507,
        "nodeType": 8,
        "title": "提交",
        "url": "/zh/yunxiao/developer-reference/submission/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/getcommit-query-commit-information",
            "id": 2846508,
            "nodeType": 1,
            "title": "GetCommit - 查询提交信息",
            "url": "/zh/yunxiao/developer-reference/getcommit-query-commit-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listcommits-query-the-submission-list",
            "id": 2846528,
            "nodeType": 1,
            "title": "ListCommits - 查询提交列表",
            "url": "/zh/yunxiao/developer-reference/listcommits-query-the-submission-list",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createcommitcomment",
            "id": 2948590,
            "nodeType": 1,
            "title": "CreateCommitComment - 给单个提交添加评论",
            "url": "/zh/yunxiao/developer-reference/createcommitcomment",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/file",
        "id": 2846486,
        "nodeType": 8,
        "title": "文件",
        "url": "/zh/yunxiao/developer-reference/file/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createfile",
            "id": 2846492,
            "nodeType": 1,
            "title": "CreateFile - 创建文件",
            "url": "/zh/yunxiao/developer-reference/createfile",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletefile",
            "id": 2848247,
            "nodeType": 1,
            "title": "DeleteFile - 删除文件",
            "url": "/zh/yunxiao/developer-reference/deletefile",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getfileblobs",
            "id": 2848248,
            "nodeType": 1,
            "title": "GetFileBlobs - 查询文件内容",
            "url": "/zh/yunxiao/developer-reference/getfileblobs",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listfiles",
            "id": 2848249,
            "nodeType": 1,
            "title": "ListFiles - 查询文件树",
            "url": "/zh/yunxiao/developer-reference/listfiles",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatefile",
            "id": 2848250,
            "nodeType": 1,
            "title": "UpdateFile - 更新文件内容",
            "url": "/zh/yunxiao/developer-reference/updatefile",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getfileblame-get-file-blame-information",
            "id": 2980124,
            "nodeType": 1,
            "title": "GetFileBlame - 获取文件 blame 信息",
            "url": "/zh/yunxiao/developer-reference/getfileblame-get-file-blame-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/commitmultiplefiles-multi-file-change-commit",
            "id": 2990615,
            "nodeType": 1,
            "title": "CommitMultipleFiles - 多文件变更提交",
            "url": "/zh/yunxiao/developer-reference/commitmultiplefiles-multi-file-change-commit",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/code-library-tags",
        "id": 2846511,
        "nodeType": 8,
        "title": "标签",
        "url": "/zh/yunxiao/developer-reference/code-library-tags/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createtag",
            "id": 2846512,
            "nodeType": 1,
            "title": "CreateTag - 创建标签",
            "url": "/zh/yunxiao/developer-reference/createtag",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletetag",
            "id": 2846514,
            "nodeType": 1,
            "title": "DeleteTag - 删除标签",
            "url": "/zh/yunxiao/developer-reference/deletetag",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listtags",
            "id": 2846513,
            "nodeType": 1,
            "title": "ListTags - 查询标签列表",
            "url": "/zh/yunxiao/developer-reference/listtags",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/protection-branch",
        "id": 2846749,
        "nodeType": 8,
        "title": "保护分支",
        "url": "/zh/yunxiao/developer-reference/protection-branch/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createprotectedbranch",
            "id": 2846751,
            "nodeType": 1,
            "title": "CreateProtectedBranch - 创建保护分支",
            "url": "/zh/yunxiao/developer-reference/createprotectedbranch",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteprotectedbranch",
            "id": 2846753,
            "nodeType": 1,
            "title": "DeleteProtectedBranch - 移除保护分支",
            "url": "/zh/yunxiao/developer-reference/deleteprotectedbranch",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getprotectedbranch",
            "id": 2846754,
            "nodeType": 1,
            "title": "GetProtectedBranch - 查询保护分支",
            "url": "/zh/yunxiao/developer-reference/getprotectedbranch",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listprotectedbranches",
            "id": 2846752,
            "nodeType": 1,
            "title": "ListProtectedBranches - 查询保护分支列表",
            "url": "/zh/yunxiao/developer-reference/listprotectedbranches",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateprotectedbranch",
            "id": 2846750,
            "nodeType": 1,
            "title": "UpdateProtectedBranch - 更新保护分支",
            "url": "/zh/yunxiao/developer-reference/updateprotectedbranch",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/merge-request-1",
        "id": 2846797,
        "nodeType": 8,
        "title": "合并请求",
        "url": "/zh/yunxiao/developer-reference/merge-request-1/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createchangerequest-create-merge-request",
            "id": 2846799,
            "nodeType": 1,
            "title": "CreateChangeRequest - 创建合并请求",
            "url": "/zh/yunxiao/developer-reference/createchangerequest-create-merge-request",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/closechangerequest-close-merge-request",
            "id": 2846798,
            "nodeType": 1,
            "title": "CloseChangeRequest - 关闭合并请求",
            "url": "/zh/yunxiao/developer-reference/closechangerequest-close-merge-request",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getchangerequest-query-merge-request",
            "id": 2846801,
            "nodeType": 1,
            "title": "GetChangeRequest - 查询合并请求",
            "url": "/zh/yunxiao/developer-reference/getchangerequest-query-merge-request",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/attachlabelstochangerquest",
            "id": 2970281,
            "nodeType": 1,
            "title": "AttachLabelsToChangeRequest - 关联类标到合并请求",
            "url": "/zh/yunxiao/developer-reference/attachlabelstochangerquest",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getchangerequestlabels",
            "id": 2970096,
            "nodeType": 1,
            "title": "GetChangeRequestLabels - 获取合并请求的类标",
            "url": "/zh/yunxiao/developer-reference/getchangerequestlabels",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listchangerequests-query-the-list-of-merge-requests",
            "id": 2846806,
            "nodeType": 1,
            "title": "ListChangeRequests - 查询合并请求列表",
            "url": "/zh/yunxiao/developer-reference/listchangerequests-query-the-list-of-merge-requests",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getchangerequesttree-queries-the-change-file-tree-for-merge-requests",
            "id": 2846802,
            "nodeType": 1,
            "title": "GetChangeRequestTree - 查询合并请求的变更文件树",
            "url": "/zh/yunxiao/developer-reference/getchangerequesttree-queries-the-change-file-tree-for-merge-requests",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listchangerequestpatchsets-query-the-list-of-merge-request-versions",
            "id": 2846805,
            "nodeType": 1,
            "title": "ListChangeRequestPatchSets - 查询合并请求版本列表",
            "url": "/zh/yunxiao/developer-reference/listchangerequestpatchsets-query-the-list-of-merge-request-versions",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/reviewchangerequest-review-merge-request",
            "id": 2846811,
            "nodeType": 1,
            "title": "ReviewChangeRequest - 评审合并请求",
            "url": "/zh/yunxiao/developer-reference/reviewchangerequest-review-merge-request",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatechangerequest-update-merge-request-basic-information",
            "id": 2846812,
            "nodeType": 1,
            "title": "UpdateChangeRequest - 更新合并请求基本信息",
            "url": "/zh/yunxiao/developer-reference/updatechangerequest-update-merge-request-basic-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/update-merge-request-stakeholders",
            "id": 2846813,
            "nodeType": 1,
            "title": "UpdateChangeRequestRelatedPerson - 更新合并请求干系人",
            "url": "/zh/yunxiao/developer-reference/update-merge-request-stakeholders",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/mergechangerequest-merge-merge-request",
            "id": 2846808,
            "nodeType": 1,
            "title": "MergeChangeRequest - 合并合并请求",
            "url": "/zh/yunxiao/developer-reference/mergechangerequest-merge-merge-request",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/reopenchangerequest-reopen-merge-request",
            "id": 2846809,
            "nodeType": 1,
            "title": "ReopenChangeRequest - 重新打开合并请求",
            "url": "/zh/yunxiao/developer-reference/reopenchangerequest-reopen-merge-request",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getmergerequest-query-merge-request-old",
            "id": 2846803,
            "nodeType": 1,
            "title": "GetMergeRequest - 查询合并请求(旧)",
            "url": "/zh/yunxiao/developer-reference/getmergerequest-query-merge-request-old",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listmergerequests-query-the-list-of-merge-requests-old",
            "id": 2846807,
            "nodeType": 1,
            "title": "ListMergeRequests - 查询合并请求列表(旧)",
            "url": "/zh/yunxiao/developer-reference/listmergerequests-query-the-list-of-merge-requests-old",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createchangerequestcomment",
            "id": 2872990,
            "nodeType": 1,
            "title": "CreateChangeRequestComment - 创建合并请求评论",
            "url": "/zh/yunxiao/developer-reference/createchangerequestcomment",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatechangerequestcomment",
            "id": 2922107,
            "nodeType": 1,
            "title": "UpdateChangeRequestComment - 更新合并请求评论",
            "url": "/zh/yunxiao/developer-reference/updatechangerequestcomment",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletechangerequestcomment",
            "id": 2922108,
            "nodeType": 1,
            "title": "DeleteChangeRequestComment - 删除合并请求评论",
            "url": "/zh/yunxiao/developer-reference/deletechangerequestcomment",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listmergerequestcomments",
            "id": 2922114,
            "nodeType": 1,
            "title": "ListMergeRequestComments - 查询评论列表",
            "url": "/zh/yunxiao/developer-reference/listmergerequestcomments",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/code-comparison",
        "id": 2846746,
        "nodeType": 8,
        "title": "代码比较",
        "url": "/zh/yunxiao/developer-reference/code-comparison/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/getcompare",
            "id": 2846747,
            "nodeType": 1,
            "title": "GetCompare - 查询代码比较内容",
            "url": "/zh/yunxiao/developer-reference/getcompare",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/push-rules",
        "id": 2846979,
        "nodeType": 8,
        "title": "推送规则",
        "url": "/zh/yunxiao/developer-reference/push-rules/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createpushrule",
            "id": 2846980,
            "nodeType": 1,
            "title": "CreatePushRule - 创建推送规则",
            "url": "/zh/yunxiao/developer-reference/createpushrule",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletepushrule",
            "id": 2846983,
            "nodeType": 1,
            "title": "DeletePushRule - 删除推送规则",
            "url": "/zh/yunxiao/developer-reference/deletepushrule",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpushrule",
            "id": 2846981,
            "nodeType": 1,
            "title": "GetPushRule - 查询推送规则",
            "url": "/zh/yunxiao/developer-reference/getpushrule",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listpushrules",
            "id": 2846982,
            "nodeType": 1,
            "title": "ListPushRules - 查询推送规则列表",
            "url": "/zh/yunxiao/developer-reference/listpushrules",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatepushrule",
            "id": 2846984,
            "nodeType": 1,
            "title": "UpdatePushRule - 更新推送规则",
            "url": "/zh/yunxiao/developer-reference/updatepushrule",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/ssh-key",
        "id": 2846484,
        "nodeType": 8,
        "title": "SSH 密钥",
        "url": "/zh/yunxiao/developer-reference/ssh-key/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createsshkey-create-an-ssh-key",
            "id": 2846490,
            "nodeType": 1,
            "title": "CreateSSHKey - 创建 SSH Key",
            "url": "/zh/yunxiao/developer-reference/createsshkey-create-an-ssh-key",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletesshkey-deletes-the-ssh-key",
            "id": 2846497,
            "nodeType": 1,
            "title": "DeleteSSHKey - 删除 SSH Key",
            "url": "/zh/yunxiao/developer-reference/deletesshkey-deletes-the-ssh-key",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getsshkey-query-the-ssh-key",
            "id": 2846498,
            "nodeType": 1,
            "title": "GetSSHKey - 查询 SSH Key",
            "url": "/zh/yunxiao/developer-reference/getsshkey-query-the-ssh-key",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listsshkeys-query-the-ssh-key-list",
            "id": 2846499,
            "nodeType": 1,
            "title": "ListSSHKeys - 查询 SSH Key 列表",
            "url": "/zh/yunxiao/developer-reference/listsshkeys-query-the-ssh-key-list",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listusersshkeys",
            "id": 2861670,
            "nodeType": 1,
            "title": "ListUserSSHKeys - 查询指定用户 SSH Key 列表",
            "url": "/zh/yunxiao/developer-reference/listusersshkeys",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/webhook",
        "id": 2846485,
        "nodeType": 8,
        "title": "WebHook",
        "url": "/zh/yunxiao/developer-reference/webhook/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createwebhook-create-a-webhook",
            "id": 2846491,
            "nodeType": 1,
            "title": "CreateWebHook - 创建 Webhook",
            "url": "/zh/yunxiao/developer-reference/createwebhook-create-a-webhook",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletewebhook-delete-a-webhook",
            "id": 2846650,
            "nodeType": 1,
            "title": "DeleteWebHook - 删除 WebHook",
            "url": "/zh/yunxiao/developer-reference/deletewebhook-delete-a-webhook",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getwebhook",
            "id": 2846651,
            "nodeType": 1,
            "title": "GetWebHook - 查询 WebHook",
            "url": "/zh/yunxiao/developer-reference/getwebhook",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listwebhooks",
            "id": 2846652,
            "nodeType": 1,
            "title": "ListWebHooks - 查询 Webhook 列表",
            "url": "/zh/yunxiao/developer-reference/listwebhooks",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatewebhook",
            "id": 2846653,
            "nodeType": 1,
            "title": "UpdateWebHook - 更新 WebHook",
            "url": "/zh/yunxiao/developer-reference/updatewebhook",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/operation-check",
        "id": 2846488,
        "nodeType": 8,
        "title": "运行检查",
        "url": "/zh/yunxiao/developer-reference/operation-check/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createcheckrun",
            "id": 2846493,
            "nodeType": 1,
            "title": "CreateCheckRun - 创建运行检查",
            "url": "/zh/yunxiao/developer-reference/createcheckrun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getcheckrun",
            "id": 2848521,
            "nodeType": 1,
            "title": "GetCheckRun - 查询运行检查",
            "url": "/zh/yunxiao/developer-reference/getcheckrun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listcheckruns",
            "id": 2848520,
            "nodeType": 1,
            "title": "ListCheckRuns - 查询运行检查列表",
            "url": "/zh/yunxiao/developer-reference/listcheckruns",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatecheckrun",
            "id": 2848519,
            "nodeType": 1,
            "title": "UpdateCheckRun - 更新运行检查",
            "url": "/zh/yunxiao/developer-reference/updatecheckrun",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/codeup-deployment-key",
        "id": 2875505,
        "nodeType": 8,
        "title": "部署密钥",
        "url": "/zh/yunxiao/developer-reference/codeup-deployment-key/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createdeploykey",
            "id": 2875506,
            "nodeType": 1,
            "title": "CreateDeployKey - 创建部署密钥",
            "url": "/zh/yunxiao/developer-reference/createdeploykey",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/disabledeploykey",
            "id": 2875507,
            "nodeType": 1,
            "title": "DisableDeployKey - 禁用部署密钥",
            "url": "/zh/yunxiao/developer-reference/disabledeploykey",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/enabledeploykey",
            "id": 2875508,
            "nodeType": 1,
            "title": "EnableDeployKey - 启动部署密钥",
            "url": "/zh/yunxiao/developer-reference/enabledeploykey",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/project-labels",
        "id": 2964835,
        "nodeType": 8,
        "title": "项目类标",
        "url": "/zh/yunxiao/developer-reference/project-labels/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createprojectlabel",
            "id": 2964836,
            "nodeType": 1,
            "title": "CreateProjectLabel - 创建项目类标",
            "url": "/zh/yunxiao/developer-reference/createprojectlabel",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getprojectlabels",
            "id": 2964838,
            "nodeType": 1,
            "title": "GetProjectLabels - 获取项目类标列表",
            "url": "/zh/yunxiao/developer-reference/getprojectlabels",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateprojectlabel",
            "id": 2964837,
            "nodeType": 1,
            "title": "UpdateProjectLabel - 更新项目类标",
            "url": "/zh/yunxiao/developer-reference/updateprojectlabel",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteprojectlabel",
            "id": 2964839,
            "nodeType": 1,
            "title": "DeleteProjectLabel - 删除项目类标",
            "url": "/zh/yunxiao/developer-reference/deleteprojectlabel",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/submit-status",
        "id": 2847181,
        "nodeType": 8,
        "title": "提交状态",
        "url": "/zh/yunxiao/developer-reference/submit-status/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createcommitstatus-create-commit-status",
            "id": 2847182,
            "nodeType": 1,
            "title": "CreateCommitStatus - 创建提交状态",
            "url": "/zh/yunxiao/developer-reference/createcommitstatus-create-commit-status",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listcommitstatuses-query-the-submission-status-list",
            "id": 2847189,
            "nodeType": 1,
            "title": "ListCommitStatuses - 查询提交状态列表",
            "url": "/zh/yunxiao/developer-reference/listcommitstatuses-query-the-submission-status-list",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/members",
        "id": 2846815,
        "nodeType": 8,
        "title": "成员",
        "url": "/zh/yunxiao/developer-reference/members/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/creategroup-member-add-code-group-member",
            "id": 2846816,
            "nodeType": 1,
            "title": "CreateGroupMember - 增加代码组成员",
            "url": "/zh/yunxiao/developer-reference/creategroup-member-add-code-group-member",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createrepositorymember-add-code-base-member",
            "id": 2846817,
            "nodeType": 1,
            "title": "CreateRepositoryMember - 增加代码库成员",
            "url": "/zh/yunxiao/developer-reference/createrepositorymember-add-code-base-member",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletegroupmember-remove-code-group-members",
            "id": 2846818,
            "nodeType": 1,
            "title": "DeleteGroupMember - 移除代码组成员",
            "url": "/zh/yunxiao/developer-reference/deletegroupmember-remove-code-group-members",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleterepositorymember-remove-code-base-member",
            "id": 2846819,
            "nodeType": 1,
            "title": "DeleteRepositoryMember - 移除代码库成员",
            "url": "/zh/yunxiao/developer-reference/deleterepositorymember-remove-code-base-member",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listgroupmembers-query-code-group-member-list",
            "id": 2846820,
            "nodeType": 1,
            "title": "ListGroupMembers - 查询代码组成员列表",
            "url": "/zh/yunxiao/developer-reference/listgroupmembers-query-code-group-member-list",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listrepositorymembers-query-code-base-member-list",
            "id": 2846874,
            "nodeType": 1,
            "title": "ListRepositoryMembers - 查询代码库成员列表",
            "url": "/zh/yunxiao/developer-reference/listrepositorymembers-query-code-base-member-list",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updategroup-member-change-permissions-for-code-group-members",
            "id": 2846875,
            "nodeType": 1,
            "title": "UpdateGroupMember - 更改代码组成员的权限",
            "url": "/zh/yunxiao/developer-reference/updategroup-member-change-permissions-for-code-group-members",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updaterepositorymember-change-permissions-for-code-base-members",
            "id": 2846876,
            "nodeType": 1,
            "title": "UpdateRepositoryMember - 更改代码库成员的权限",
            "url": "/zh/yunxiao/developer-reference/updaterepositorymember-change-permissions-for-code-base-members",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getmemberhttpscloneusername",
            "id": 2861672,
            "nodeType": 1,
            "title": "GetMemberHttpsCloneUsername - 查询用户克隆账号",
            "url": "/zh/yunxiao/developer-reference/getmemberhttpscloneusername",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/user-resources",
        "id": 2997101,
        "nodeType": 8,
        "title": "用户资源",
        "url": "/zh/yunxiao/developer-reference/user-resources/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listuserresources-query-the-resources-to-which-the-user-has-permissions",
            "id": 2997102,
            "nodeType": 1,
            "title": "ListUserResources - 查询用户有权限的资源",
            "url": "/zh/yunxiao/developer-reference/listuserresources-query-the-resources-to-which-the-user-has-permissions",
            "validDocument": true
          }
        ]
      }
    ]
  },
  {
    "alias": "/yunxiao/developer-reference/first-level-node-1",
    "id": 2854270,
    "nodeType": 8,
    "title": "制品仓库",
    "url": "/zh/yunxiao/developer-reference/first-level-node-1/",
    "validDocument": false,
    "children": [
      {
        "alias": "/yunxiao/developer-reference/products",
        "id": 2854271,
        "nodeType": 8,
        "title": "制品",
        "url": "/zh/yunxiao/developer-reference/products/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listartifacts-query-product-information",
            "id": 2854273,
            "nodeType": 1,
            "title": "ListArtifacts - 查询制品信息",
            "url": "/zh/yunxiao/developer-reference/listartifacts-query-product-information",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getartifact",
            "id": 2867102,
            "nodeType": 1,
            "title": "GetArtifact - 查看单个制品信息",
            "url": "/zh/yunxiao/developer-reference/getartifact",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteartifact",
            "id": 2867093,
            "nodeType": 1,
            "title": "DeleteArtifact - 删除单个制品",
            "url": "/zh/yunxiao/developer-reference/deleteartifact",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteartifactversion",
            "id": 2867095,
            "nodeType": 1,
            "title": "DeleteArtifactVersion - 删除单个制品版本",
            "url": "/zh/yunxiao/developer-reference/deleteartifactversion",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/products-warehouse",
        "id": 2854274,
        "nodeType": 8,
        "title": "制品仓库",
        "url": "/zh/yunxiao/developer-reference/products-warehouse/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listrepositories",
            "id": 2854275,
            "nodeType": 1,
            "title": "ListRepositories - 查看仓库信息",
            "url": "/zh/yunxiao/developer-reference/listrepositories",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/batch-tasks",
        "id": 2867107,
        "nodeType": 8,
        "title": "批量任务",
        "url": "/zh/yunxiao/developer-reference/batch-tasks/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/gettask",
            "id": 2867108,
            "nodeType": 1,
            "title": "GetTask - 查看批量任务",
            "url": "/zh/yunxiao/developer-reference/gettask",
            "validDocument": true
          }
        ]
      }
    ]
  },
  {
    "alias": "/yunxiao/developer-reference/application-delivery",
    "id": 2847704,
    "nodeType": 8,
    "title": "应用交付",
    "url": "/zh/yunxiao/developer-reference/application-delivery/",
    "validDocument": false,
    "children": [
      {
        "alias": "/yunxiao/developer-reference/enterprise-settings",
        "id": 2883204,
        "nodeType": 8,
        "title": "企业设置",
        "url": "/zh/yunxiao/developer-reference/enterprise-settings/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/updateresourceinstance",
            "id": 2883205,
            "nodeType": 1,
            "title": "UpdateResourceInstance - 更新资源实例",
            "url": "/zh/yunxiao/developer-reference/updateresourceinstance",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/application",
        "id": 2847757,
        "nodeType": 8,
        "title": "应用",
        "url": "/zh/yunxiao/developer-reference/application/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createapplication",
            "id": 2847766,
            "nodeType": 1,
            "title": "CreateApplication - 创建应用",
            "url": "/zh/yunxiao/developer-reference/createapplication",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getapplication",
            "id": 2847760,
            "nodeType": 1,
            "title": "GetApplication - 查找应用详情",
            "url": "/zh/yunxiao/developer-reference/getapplication",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateapplication",
            "id": 2847767,
            "nodeType": 1,
            "title": "UpdateApplication - 更新应用",
            "url": "/zh/yunxiao/developer-reference/updateapplication",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listapplications",
            "id": 2847758,
            "nodeType": 1,
            "title": "ListApplications - 分页查找应用详情",
            "url": "/zh/yunxiao/developer-reference/listapplications",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createappmembers",
            "id": 2847761,
            "nodeType": 1,
            "title": "CreateAppMembers - 添加应用成员",
            "url": "/zh/yunxiao/developer-reference/createappmembers",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateappmember",
            "id": 2847765,
            "nodeType": 1,
            "title": "UpdateAppMember - 更新应用成员",
            "url": "/zh/yunxiao/developer-reference/updateappmember",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteappmember",
            "id": 2847759,
            "nodeType": 1,
            "title": "DeleteAppMember - 删除应用成员",
            "url": "/zh/yunxiao/developer-reference/deleteappmember",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listapplicationmembers",
            "id": 2847764,
            "nodeType": 1,
            "title": "ListApplicationMembers - 查找应用成员列表",
            "url": "/zh/yunxiao/developer-reference/listapplicationmembers",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createapplicationsource",
            "id": 2847762,
            "nodeType": 1,
            "title": "CreateApplicationSource - 创建应用源",
            "url": "/zh/yunxiao/developer-reference/createapplicationsource",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listapplicationsources",
            "id": 2847763,
            "nodeType": 1,
            "title": "ListApplicationSources - 分页查找应用源详情",
            "url": "/zh/yunxiao/developer-reference/listapplicationsources",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/attachtemplate",
            "id": 2862079,
            "nodeType": 1,
            "title": "AttachTemplate - 关联应用模板",
            "url": "/zh/yunxiao/developer-reference/attachtemplate",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/detachtemplate",
            "id": 2862080,
            "nodeType": 1,
            "title": "DetachTemplate - 解绑应用模板",
            "url": "/zh/yunxiao/developer-reference/detachtemplate",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteapplication-deletes-an-application",
            "id": 3023229,
            "nodeType": 1,
            "title": "DeleteApplication - 删除应用",
            "url": "/zh/yunxiao/developer-reference/deleteapplication-deletes-an-application",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/app-tag",
        "id": 2937093,
        "nodeType": 8,
        "title": "应用标签",
        "url": "/zh/yunxiao/developer-reference/app-tag/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createapptag",
            "id": 2937096,
            "nodeType": 1,
            "title": "CreateAppTag - 创建应用标签",
            "url": "/zh/yunxiao/developer-reference/createapptag",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteapptag",
            "id": 2937097,
            "nodeType": 1,
            "title": "DeleteAppTag - 删除应用标签",
            "url": "/zh/yunxiao/developer-reference/deleteapptag",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/searchapptag",
            "id": 2937095,
            "nodeType": 1,
            "title": "SearchAppTag - 查询应用标签",
            "url": "/zh/yunxiao/developer-reference/searchapptag",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateapptag",
            "id": 2937094,
            "nodeType": 1,
            "title": "UpdateAppTag - 更新应用标签",
            "url": "/zh/yunxiao/developer-reference/updateapptag",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/environment",
        "id": 2848588,
        "nodeType": 8,
        "title": "环境",
        "url": "/zh/yunxiao/developer-reference/environment/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createenvironments",
            "id": 2848589,
            "nodeType": 1,
            "title": "CreateEnvironments - 创建环境",
            "url": "/zh/yunxiao/developer-reference/createenvironments",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateenv",
            "id": 2848593,
            "nodeType": 1,
            "title": "UpdateEnv - 更新环境",
            "url": "/zh/yunxiao/developer-reference/updateenv",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteenv",
            "id": 2848590,
            "nodeType": 1,
            "title": "DeleteEnv - 删除环境",
            "url": "/zh/yunxiao/developer-reference/deleteenv",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getenvironment",
            "id": 2848591,
            "nodeType": 1,
            "title": "GetEnvironment - 查找环境详情",
            "url": "/zh/yunxiao/developer-reference/getenvironment",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listenvironments",
            "id": 2848592,
            "nodeType": 1,
            "title": "ListEnvironments - 分页查找环境详情列表",
            "url": "/zh/yunxiao/developer-reference/listenvironments",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateenvcomputationresource",
            "id": 2848594,
            "nodeType": 1,
            "title": "UpdateEnvComputationResource - 为环境关联计算资源",
            "url": "/zh/yunxiao/developer-reference/updateenvcomputationresource",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/lockenv",
            "id": 2856671,
            "nodeType": 1,
            "title": "LockEnv - 锁定环境",
            "url": "/zh/yunxiao/developer-reference/lockenv",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/unlockenv",
            "id": 2856672,
            "nodeType": 1,
            "title": "UnLockEnv - 解锁环境",
            "url": "/zh/yunxiao/developer-reference/unlockenv",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/deployment-order",
        "id": 2860566,
        "nodeType": 8,
        "title": "部署单",
        "url": "/zh/yunxiao/developer-reference/deployment-order/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createchangeorder",
            "id": 2861093,
            "nodeType": 1,
            "title": "CreateChangeOrder - 创建部署单",
            "url": "/zh/yunxiao/developer-reference/createchangeorder",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/executejobaction",
            "id": 2860567,
            "nodeType": 1,
            "title": "ExecuteJobAction - 操作环境部署单",
            "url": "/zh/yunxiao/developer-reference/executejobaction",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getchangeorder",
            "id": 2861094,
            "nodeType": 1,
            "title": "GetChangeOrder - 读取部署单使用的物料和工单状态",
            "url": "/zh/yunxiao/developer-reference/getchangeorder",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listchangeorversions",
            "id": 2862072,
            "nodeType": 1,
            "title": "ListChangeOrderVersions - 查看部署单版本列表",
            "url": "/zh/yunxiao/developer-reference/listchangeorversions",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listchangeordersbyorigin",
            "id": 2872187,
            "nodeType": 1,
            "title": "ListChangeOrdersByOrigin - 根据创建来源查询部署单",
            "url": "/zh/yunxiao/developer-reference/listchangeordersbyorigin",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listchangeorders-query-the-list-of-deployment-orders",
            "id": 2986690,
            "nodeType": 1,
            "title": "ListChangeOrders - 查询部署单列表",
            "url": "/zh/yunxiao/developer-reference/listchangeorders-query-the-list-of-deployment-orders",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/application-choreography",
        "id": 2848583,
        "nodeType": 8,
        "title": "应用编排",
        "url": "/zh/yunxiao/developer-reference/application-choreography/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createapporchestration",
            "id": 2848580,
            "nodeType": 1,
            "title": "CreateAppOrchestration - 创建应用编排",
            "url": "/zh/yunxiao/developer-reference/createapporchestration",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateapporchestration",
            "id": 2848587,
            "nodeType": 1,
            "title": "UpdateAppOrchestration - 更新应用编排",
            "url": "/zh/yunxiao/developer-reference/updateapporchestration",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteapporchestration",
            "id": 2848581,
            "nodeType": 1,
            "title": "DeleteAppOrchestration - 删除应用编排",
            "url": "/zh/yunxiao/developer-reference/deleteapporchestration",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getapporchestration",
            "id": 2848755,
            "nodeType": 1,
            "title": "GetAppOrchestration - 查找应用编排详情",
            "url": "/zh/yunxiao/developer-reference/getapporchestration",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getlatestorchestration",
            "id": 2848585,
            "nodeType": 1,
            "title": "GetLatestOrchestration - 查找匹配给定环境的最新一版编排实例",
            "url": "/zh/yunxiao/developer-reference/getlatestorchestration",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listapporchestration",
            "id": 2848586,
            "nodeType": 1,
            "title": "ListAppOrchestration - 查找应用编排列表",
            "url": "/zh/yunxiao/developer-reference/listapporchestration",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getapporchestrationexport-export-application-orchestration",
            "id": 2995963,
            "nodeType": 1,
            "title": "GetAppOrchestrationExport - 导出应用编排",
            "url": "/zh/yunxiao/developer-reference/getapporchestrationexport-export-application-orchestration",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/variable-group",
        "id": 2849601,
        "nodeType": 8,
        "title": "变量组",
        "url": "/zh/yunxiao/developer-reference/variable-group/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createvariablegroup",
            "id": 2849604,
            "nodeType": 1,
            "title": "CreateVariableGroup - 创建变量组",
            "url": "/zh/yunxiao/developer-reference/createvariablegroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatevariablegroup",
            "id": 2849602,
            "nodeType": 1,
            "title": "UpdateVariableGroup - 更新变量组",
            "url": "/zh/yunxiao/developer-reference/updatevariablegroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletevariablegroup",
            "id": 2849607,
            "nodeType": 1,
            "title": "DeleteVariableGroup - 删除变量组",
            "url": "/zh/yunxiao/developer-reference/deletevariablegroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getvariablegroup",
            "id": 2849608,
            "nodeType": 1,
            "title": "GetVariableGroup - 查询变量组详情",
            "url": "/zh/yunxiao/developer-reference/getvariablegroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getappvariablegroups",
            "id": 2849606,
            "nodeType": 1,
            "title": "GetAppVariableGroups - 查找应用的变量组列表详情",
            "url": "/zh/yunxiao/developer-reference/getappvariablegroups",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getappvariablegroupsrevision",
            "id": 2849603,
            "nodeType": 1,
            "title": "GetAppVariableGroupsRevision - 查找应用的变量组版本",
            "url": "/zh/yunxiao/developer-reference/getappvariablegroupsrevision",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getenvvariablegroups",
            "id": 2849605,
            "nodeType": 1,
            "title": "GetEnvVariableGroups - 查找环境所绑定的变量组列表详情",
            "url": "/zh/yunxiao/developer-reference/getenvvariablegroups",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/change",
        "id": 2849975,
        "nodeType": 8,
        "title": "变更",
        "url": "/zh/yunxiao/developer-reference/change/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createchangerequest",
            "id": 2849979,
            "nodeType": 1,
            "title": "CreateChangeRequest - 创建变更",
            "url": "/zh/yunxiao/developer-reference/createchangerequest",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/cancelchangerequest",
            "id": 2849980,
            "nodeType": 1,
            "title": "CancelChangeRequest - 关闭变更",
            "url": "/zh/yunxiao/developer-reference/cancelchangerequest",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/closechangerequest",
            "id": 2849976,
            "nodeType": 1,
            "title": "CloseChangeRequest - 完成变更",
            "url": "/zh/yunxiao/developer-reference/closechangerequest",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getchangerequestaudititems",
            "id": 2849977,
            "nodeType": 1,
            "title": "GetChangeRequestAuditItems - 查找变更关联的审批项列表",
            "url": "/zh/yunxiao/developer-reference/getchangerequestaudititems",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listchangerequestexecutions",
            "id": 2849978,
            "nodeType": 1,
            "title": "ListChangeRequestExecutions - 查询变更研发流程运行记录",
            "url": "/zh/yunxiao/developer-reference/listchangerequestexecutions",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listchangerequestworkitems",
            "id": 2862069,
            "nodeType": 1,
            "title": "ListChangeRequestWorkItems - 查询变更关联工作项",
            "url": "/zh/yunxiao/developer-reference/listchangerequestworkitems",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listappchangerequests-search-for-a-list-of-changes",
            "id": 3023228,
            "nodeType": 1,
            "title": "ListAppChangeRequests - 搜索变更列表",
            "url": "/zh/yunxiao/developer-reference/listappchangerequests-search-for-a-list-of-changes",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/r-d-process",
        "id": 2848595,
        "nodeType": 8,
        "title": "研发流程",
        "url": "/zh/yunxiao/developer-reference/r-d-process/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listallreleaseworkflows",
            "id": 2848596,
            "nodeType": 1,
            "title": "ListAllReleaseWorkflows - 查找应用下所有的研发流程",
            "url": "/zh/yunxiao/developer-reference/listallreleaseworkflows",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listallreleaseworkflowbriefs",
            "id": 2860588,
            "nodeType": 1,
            "title": "ListAllReleaseWorkflowBriefs - 查找应用下所有的研发流程摘要",
            "url": "/zh/yunxiao/developer-reference/listallreleaseworkflowbriefs",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatereleasestageflow-updates-the-yaml-configuration-in-the-release-phase",
            "id": 2986687,
            "nodeType": 1,
            "title": "UpdateReleaseStageFlow - 更新发布阶段 YAML 配置",
            "url": "/zh/yunxiao/developer-reference/updatereleasestageflow-updates-the-yaml-configuration-in-the-release-phase",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/r-d-phase",
        "id": 2849621,
        "nodeType": 8,
        "title": "研发阶段",
        "url": "/zh/yunxiao/developer-reference/r-d-phase/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/exeexecutechangerequestreleasestage",
            "id": 2849623,
            "nodeType": 1,
            "title": "ExecuteChangeRequestReleaseStage - 执行研发阶段流水线",
            "url": "/zh/yunxiao/developer-reference/exeexecutechangerequestreleasestage",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/cancelexecutionreleasestage",
            "id": 2856700,
            "nodeType": 1,
            "title": "CancelExecutionReleaseStage - 取消执行研发阶段流水线",
            "url": "/zh/yunxiao/developer-reference/cancelexecutionreleasestage",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getreleasestagepipelinerun",
            "id": 2856701,
            "nodeType": 1,
            "title": "GetReleaseStagePipelineRun - 获取研发阶段流水线运行实例",
            "url": "/zh/yunxiao/developer-reference/getreleasestagepipelinerun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getappreleasestageexecutionpipelinejoblog",
            "id": 2856703,
            "nodeType": 1,
            "title": "GetAppReleaseStageExecutionPipelineJobLog - 查询研发阶段流水线任务运行日志",
            "url": "/zh/yunxiao/developer-reference/getappreleasestageexecutionpipelinejoblog",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/passreleasestagepipelinevalidate",
            "id": 2856702,
            "nodeType": 1,
            "title": "PassReleaseStagePipelineValidate - 通过研发阶段流水线人工卡点",
            "url": "/zh/yunxiao/developer-reference/passreleasestagepipelinevalidate",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/refusereleasestagepipelinevalidate",
            "id": 2856704,
            "nodeType": 1,
            "title": "RefuseReleaseStagePipelineValidate - 拒绝研发阶段流水线卡点",
            "url": "/zh/yunxiao/developer-reference/refusereleasestagepipelinevalidate",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listappreleasestageruns",
            "id": 2856698,
            "nodeType": 1,
            "title": "ListAppReleaseStageRuns - 批量查询研发阶段执行记录",
            "url": "/zh/yunxiao/developer-reference/listappreleasestageruns",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listappreleasestageexecutionintegratedmetadata",
            "id": 2856699,
            "nodeType": 1,
            "title": "ListAppReleaseStageExecutionIntegratedMetadata - 查询研发阶段执行记录集成变更信息",
            "url": "/zh/yunxiao/developer-reference/listappreleasestageexecutionintegratedmetadata",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatereleasestage",
            "id": 2849624,
            "nodeType": 1,
            "title": "UpdateReleaseStage - 更新研发阶段",
            "url": "/zh/yunxiao/developer-reference/updatereleasestage",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getreleaseworkflowstage",
            "id": 2860583,
            "nodeType": 1,
            "title": "GetReleaseWorkflowStage - 查找研发阶段详情",
            "url": "/zh/yunxiao/developer-reference/getreleaseworkflowstage",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listallreleasestagebriefs",
            "id": 2860587,
            "nodeType": 1,
            "title": "ListAllReleaseStageBriefs - 查找研发流程下所有研发阶段摘要",
            "url": "/zh/yunxiao/developer-reference/listallreleasestagebriefs",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/retrychangerequeststagepipeline",
            "id": 2860592,
            "nodeType": 1,
            "title": "RetryChangeRequestStagePipeline - 重试研发阶段运行",
            "url": "/zh/yunxiao/developer-reference/retrychangerequeststagepipeline",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/skipchangerequeststagepipeline",
            "id": 2860593,
            "nodeType": 1,
            "title": "SkipChangeRequestStagePipeline - 跳过研发阶段运行",
            "url": "/zh/yunxiao/developer-reference/skipchangerequeststagepipeline",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/query-and-publish-phase-integration-metadata",
            "id": 3023227,
            "nodeType": 1,
            "title": "ListReleaseStageFlowChangeRequests - 查询发布阶段集成元数据",
            "url": "/zh/yunxiao/developer-reference/query-and-publish-phase-integration-metadata",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/apply-template",
        "id": 2848569,
        "nodeType": 8,
        "title": "应用模板",
        "url": "/zh/yunxiao/developer-reference/apply-template/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/searchapptemplates",
            "id": 2848570,
            "nodeType": 1,
            "title": "SearchAppTemplates - 搜索应用模板",
            "url": "/zh/yunxiao/developer-reference/searchapptemplates",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/global-variable-group",
        "id": 2847708,
        "nodeType": 8,
        "title": "全局变量组",
        "url": "/zh/yunxiao/developer-reference/global-variable-group/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createglobalvar",
            "id": 2847712,
            "nodeType": 1,
            "title": "CreateGlobalVar - 创建全局变量组",
            "url": "/zh/yunxiao/developer-reference/createglobalvar",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateglobalvar",
            "id": 2849452,
            "nodeType": 1,
            "title": "UpdateGlobalVar - 更新全局变量组",
            "url": "/zh/yunxiao/developer-reference/updateglobalvar",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteglobalvar",
            "id": 2848673,
            "nodeType": 1,
            "title": "DeleteGlobalVar - 删除全局变量组",
            "url": "/zh/yunxiao/developer-reference/deleteglobalvar",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getglobalvar",
            "id": 2849450,
            "nodeType": 1,
            "title": "GetGlobalVar - 查询全局变量组",
            "url": "/zh/yunxiao/developer-reference/getglobalvar",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listglobalvars",
            "id": 2849451,
            "nodeType": 1,
            "title": "ListGlobalVars - 查询全局变量组列表",
            "url": "/zh/yunxiao/developer-reference/listglobalvars",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/resources",
        "id": 2928845,
        "nodeType": 8,
        "title": "资源",
        "url": "/zh/yunxiao/developer-reference/resources/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/addhostlisttohostgroup",
            "id": 2928846,
            "nodeType": 1,
            "title": "AddHostListToHostGroup - 主机集群添加主机",
            "url": "/zh/yunxiao/developer-reference/addhostlisttohostgroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletehostlistfromhostgroup",
            "id": 2928859,
            "nodeType": 1,
            "title": "DeleteHostListFromHostGroup - 主机集群移除主机",
            "url": "/zh/yunxiao/developer-reference/deletehostlistfromhostgroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/addhostlisttodeploygroup",
            "id": 2928866,
            "nodeType": 1,
            "title": "AddHostListToDeployGroup - 部署组添加主机",
            "url": "/zh/yunxiao/developer-reference/addhostlisttodeploygroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletehostlistfromdeploygroup",
            "id": 2928869,
            "nodeType": 1,
            "title": "DeleteHostListFromDeployGroup - 部署组移除主机",
            "url": "/zh/yunxiao/developer-reference/deletehostlistfromdeploygroup",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/webhook1",
        "id": 2986605,
        "nodeType": 8,
        "title": "Webhook",
        "url": "/zh/yunxiao/developer-reference/webhook1/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createappstackwebhook-create-an-appstack-webhook",
            "id": 2986606,
            "nodeType": 1,
            "title": "CreateAppStackWebhook - 创建 AppStack Webhook",
            "url": "/zh/yunxiao/developer-reference/createappstackwebhook-create-an-appstack-webhook",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteappstackwebhook-delete-appstack-webhook",
            "id": 2986608,
            "nodeType": 1,
            "title": "DeleteAppStackWebhook - 删除 AppStack Webhook",
            "url": "/zh/yunxiao/developer-reference/deleteappstackwebhook-delete-appstack-webhook",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listappstackwebhook-history-get-appstack-webhook-execution-history",
            "id": 2986609,
            "nodeType": 1,
            "title": "ListAppStackWebhookHistory - 获取 AppStack Webhook 执行历史",
            "url": "/zh/yunxiao/developer-reference/listappstackwebhook-history-get-appstack-webhook-execution-history",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listappstackwebhooks-list-appstack-webhooks",
            "id": 2986610,
            "nodeType": 1,
            "title": "ListAppStackWebhooks - 列出 AppStack Webhooks",
            "url": "/zh/yunxiao/developer-reference/listappstackwebhooks-list-appstack-webhooks",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateappstackwebhook-update-appstack-webhook",
            "id": 2986611,
            "nodeType": 1,
            "title": "UpdateAppStackWebhook - 更新 AppStack Webhook",
            "url": "/zh/yunxiao/developer-reference/updateappstackwebhook-update-appstack-webhook",
            "validDocument": true
          }
        ]
      }
    ]
  },
  {
    "alias": "/yunxiao/developer-reference/projex",
    "id": 2870122,
    "nodeType": 8,
    "title": "项目协作",
    "url": "/zh/yunxiao/developer-reference/projex/",
    "validDocument": false,
    "children": [
      {
        "alias": "/yunxiao/developer-reference/project",
        "id": 2870126,
        "nodeType": 8,
        "title": "项目",
        "url": "/zh/yunxiao/developer-reference/project/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createproject",
            "id": 2975442,
            "nodeType": 1,
            "title": "CreateProject - 创建项目",
            "url": "/zh/yunxiao/developer-reference/createproject",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getproject",
            "id": 2870127,
            "nodeType": 1,
            "title": "GetProject - 获取项目",
            "url": "/zh/yunxiao/developer-reference/getproject",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateproject",
            "id": 2870154,
            "nodeType": 1,
            "title": "UpdateProject - 更新项目",
            "url": "/zh/yunxiao/developer-reference/updateproject",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteproject",
            "id": 2870158,
            "nodeType": 1,
            "title": "DeleteProject - 删除项目",
            "url": "/zh/yunxiao/developer-reference/deleteproject",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/searchprojects",
            "id": 2870160,
            "nodeType": 1,
            "title": "SearchProjects - 搜索项目",
            "url": "/zh/yunxiao/developer-reference/searchprojects",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/searchprograms-search-for-item-sets",
            "id": 3017475,
            "nodeType": 1,
            "title": "SearchPrograms - 搜索项目集",
            "url": "/zh/yunxiao/developer-reference/searchprograms-search-for-item-sets",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/project-template",
        "id": 2870123,
        "nodeType": 8,
        "title": "项目模板",
        "url": "/zh/yunxiao/developer-reference/project-template/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listprojecttemplates",
            "id": 2870124,
            "nodeType": 1,
            "title": "ListProjectTemplates - 获取项目模板",
            "url": "/zh/yunxiao/developer-reference/listprojecttemplates",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getprojecttemplatefieldconfig",
            "id": 2870125,
            "nodeType": 1,
            "title": "GetProjectTemplateFieldConfig - 获取项目模板字段配置",
            "url": "/zh/yunxiao/developer-reference/getprojecttemplatefieldconfig",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/project-roles",
        "id": 2870162,
        "nodeType": 8,
        "title": "项目角色",
        "url": "/zh/yunxiao/developer-reference/project-roles/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listallprojectroles",
            "id": 2870163,
            "nodeType": 1,
            "title": "ListAllProjectRoles - 获取组织下所有的项目角色列表",
            "url": "/zh/yunxiao/developer-reference/listallprojectroles",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listprojectroles",
            "id": 2870164,
            "nodeType": 1,
            "title": "ListProjectRoles - 获取项目角色列表",
            "url": "/zh/yunxiao/developer-reference/listprojectroles",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createprojectrole",
            "id": 2870167,
            "nodeType": 1,
            "title": "CreateProjectRole - 添加项目角色",
            "url": "/zh/yunxiao/developer-reference/createprojectrole",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteprojectrole",
            "id": 2870168,
            "nodeType": 1,
            "title": "DeleteProjectRole - 删除项目角色",
            "url": "/zh/yunxiao/developer-reference/deleteprojectrole",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/project-members",
        "id": 2870169,
        "nodeType": 8,
        "title": "项目成员",
        "url": "/zh/yunxiao/developer-reference/project-members/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listprojectmembers",
            "id": 2870170,
            "nodeType": 1,
            "title": "ListProjectMembers - 获取项目成员列表",
            "url": "/zh/yunxiao/developer-reference/listprojectmembers",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createprojectmember",
            "id": 2870180,
            "nodeType": 1,
            "title": "CreateProjectMember - 添加项目成员",
            "url": "/zh/yunxiao/developer-reference/createprojectmember",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteprojectmember",
            "id": 2870181,
            "nodeType": 1,
            "title": "DeleteProjectMember - 删除项目成员",
            "url": "/zh/yunxiao/developer-reference/deleteprojectmember",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/versions",
        "id": 2870209,
        "nodeType": 8,
        "title": "版本",
        "url": "/zh/yunxiao/developer-reference/versions/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listversions",
            "id": 2870210,
            "nodeType": 1,
            "title": "ListVersions - 获取版本列表",
            "url": "/zh/yunxiao/developer-reference/listversions",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createversion",
            "id": 2870211,
            "nodeType": 1,
            "title": "CreateVersion - 创建版本",
            "url": "/zh/yunxiao/developer-reference/createversion",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateversion",
            "id": 2870212,
            "nodeType": 1,
            "title": "UpdateVersion - 更新版本",
            "url": "/zh/yunxiao/developer-reference/updateversion",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteversion",
            "id": 2870213,
            "nodeType": 1,
            "title": "DeleteVersion - 删除版本",
            "url": "/zh/yunxiao/developer-reference/deleteversion",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listprogramversions-get-a-list-of-project-set-versions",
            "id": 3017478,
            "nodeType": 1,
            "title": "ListProgramVersions - 获取项目集版本列表",
            "url": "/zh/yunxiao/developer-reference/listprogramversions-get-a-list-of-project-set-versions",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/custom-fields",
        "id": 2936718,
        "nodeType": 8,
        "title": "自定义字段",
        "url": "/zh/yunxiao/developer-reference/custom-fields/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/updatecustomfield",
            "id": 2936719,
            "nodeType": 1,
            "title": "UpdateCustomField - 更新自定义字段",
            "url": "/zh/yunxiao/developer-reference/updatecustomfield",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/sprints",
        "id": 2870322,
        "nodeType": 8,
        "title": "迭代",
        "url": "/zh/yunxiao/developer-reference/sprints/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listsprints",
            "id": 2870324,
            "nodeType": 1,
            "title": "ListSprints - 获取迭代列表",
            "url": "/zh/yunxiao/developer-reference/listsprints",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getsprint",
            "id": 2870330,
            "nodeType": 1,
            "title": "GetSprint - 获取迭代",
            "url": "/zh/yunxiao/developer-reference/getsprint",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createsprint",
            "id": 2870333,
            "nodeType": 1,
            "title": "CreateSprint - 创建迭代",
            "url": "/zh/yunxiao/developer-reference/createsprint",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatesprint",
            "id": 2870334,
            "nodeType": 1,
            "title": "UpdateSprint - 更新迭代",
            "url": "/zh/yunxiao/developer-reference/updatesprint",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/labels",
        "id": 2870350,
        "nodeType": 8,
        "title": "标签",
        "url": "/zh/yunxiao/developer-reference/labels/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listlabels",
            "id": 2870351,
            "nodeType": 1,
            "title": "ListLabels - 获取标签列表",
            "url": "/zh/yunxiao/developer-reference/listlabels",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createlabel",
            "id": 2870353,
            "nodeType": 1,
            "title": "CreateLabel - 创建标签",
            "url": "/zh/yunxiao/developer-reference/createlabel",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatelabel",
            "id": 2870354,
            "nodeType": 1,
            "title": "UpdateLabel - 更新标签",
            "url": "/zh/yunxiao/developer-reference/updatelabel",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/milestones",
        "id": 2870355,
        "nodeType": 8,
        "title": "里程碑",
        "url": "/zh/yunxiao/developer-reference/milestones/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listmilestones",
            "id": 2870356,
            "nodeType": 1,
            "title": "ListMilestones - 获取里程碑列表",
            "url": "/zh/yunxiao/developer-reference/listmilestones",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createmilestone",
            "id": 2870358,
            "nodeType": 1,
            "title": "CreateMilestone - 创建里程碑",
            "url": "/zh/yunxiao/developer-reference/createmilestone",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatemilestone",
            "id": 2870360,
            "nodeType": 1,
            "title": "UpdateMilestone - 更新里程碑",
            "url": "/zh/yunxiao/developer-reference/updatemilestone",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletemilestone",
            "id": 2870362,
            "nodeType": 1,
            "title": "DeleteMilestone - 删除里程碑",
            "url": "/zh/yunxiao/developer-reference/deletemilestone",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/work-items",
        "id": 2870365,
        "nodeType": 8,
        "title": "工作项",
        "url": "/zh/yunxiao/developer-reference/work-items/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/searchworkitems",
            "id": 2870366,
            "nodeType": 1,
            "title": "SearchWorkitems - 搜索工作项",
            "url": "/zh/yunxiao/developer-reference/searchworkitems",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getworkitem",
            "id": 2870390,
            "nodeType": 1,
            "title": "GetWorkitem - 获取工作项",
            "url": "/zh/yunxiao/developer-reference/getworkitem",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createworkitem",
            "id": 2870395,
            "nodeType": 1,
            "title": "CreateWorkitem - 创建工作项",
            "url": "/zh/yunxiao/developer-reference/createworkitem",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateworkitem",
            "id": 2870396,
            "nodeType": 1,
            "title": "UpdateWorkitem - 更新工作项",
            "url": "/zh/yunxiao/developer-reference/updateworkitem",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteworkitem",
            "id": 2870398,
            "nodeType": 1,
            "title": "DeleteWorkitem - 删除工作项",
            "url": "/zh/yunxiao/developer-reference/deleteworkitem",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listworkitemactivities",
            "id": 2870399,
            "nodeType": 1,
            "title": "ListWorkitemActivities - 获取工作项动态",
            "url": "/zh/yunxiao/developer-reference/listworkitemactivities",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/work-item-comments",
        "id": 2870449,
        "nodeType": 8,
        "title": "工作项评论",
        "url": "/zh/yunxiao/developer-reference/work-item-comments/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listworkitemcomments",
            "id": 2870450,
            "nodeType": 1,
            "title": "ListWorkitemComments - 获取工作项评论列表",
            "url": "/zh/yunxiao/developer-reference/listworkitemcomments",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createworkitemcomment",
            "id": 2870454,
            "nodeType": 1,
            "title": "CreateWorkitemComment - 创建工作项评论",
            "url": "/zh/yunxiao/developer-reference/createworkitemcomment",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/work-item-attachments",
        "id": 2870456,
        "nodeType": 8,
        "title": "工作项附件",
        "url": "/zh/yunxiao/developer-reference/work-item-attachments/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listworkitemattachments",
            "id": 2870457,
            "nodeType": 1,
            "title": "ListWorkitemAttachments - 获取工作项附件列表",
            "url": "/zh/yunxiao/developer-reference/listworkitemattachments",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getworkitemfile",
            "id": 2870459,
            "nodeType": 1,
            "title": "GetWorkitemFile - 获取工作文件信息",
            "url": "/zh/yunxiao/developer-reference/getworkitemfile",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/work-item-related-items",
        "id": 2870544,
        "nodeType": 8,
        "title": "工作项相关项",
        "url": "/zh/yunxiao/developer-reference/work-item-related-items/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listworkitemrelationrecords",
            "id": 2870567,
            "nodeType": 1,
            "title": "ListWorkitemRelationRecords - 获取工作项关联项",
            "url": "/zh/yunxiao/developer-reference/listworkitemrelationrecords",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createworkitemrelationrecord",
            "id": 2870620,
            "nodeType": 1,
            "title": "CreateWorkitemRelationRecord - 创建工作项关联项",
            "url": "/zh/yunxiao/developer-reference/createworkitemrelationrecord",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteworkitemrelationrecord",
            "id": 2870621,
            "nodeType": 1,
            "title": "DeleteWorkitemRelationRecord - 删除工作项关联项",
            "url": "/zh/yunxiao/developer-reference/deleteworkitemrelationrecord",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/work-item-types",
        "id": 2870622,
        "nodeType": 8,
        "title": "工作项类型",
        "url": "/zh/yunxiao/developer-reference/work-item-types/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listallworkitemtypes",
            "id": 2870623,
            "nodeType": 1,
            "title": "ListAllWorkitemTypes - 获取组织下所有工作项类型列表",
            "url": "/zh/yunxiao/developer-reference/listallworkitemtypes",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listworkitemtypes",
            "id": 2870624,
            "nodeType": 1,
            "title": "ListWorkitemTypes - 获取工作项类型列表",
            "url": "/zh/yunxiao/developer-reference/listworkitemtypes",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getworkitemtype",
            "id": 2870641,
            "nodeType": 1,
            "title": "GetWorkitemType - 获取工作项类型详情",
            "url": "/zh/yunxiao/developer-reference/getworkitemtype",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listworkitemrelationworkitemtypes",
            "id": 2870646,
            "nodeType": 1,
            "title": "ListWorkitemRelationWorkitemTypes - 获取工作项可关联的工作项类型列表",
            "url": "/zh/yunxiao/developer-reference/listworkitemrelationworkitemtypes",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getworkitemtypefieldconfig",
            "id": 2870662,
            "nodeType": 1,
            "title": "GetWorkitemTypeFieldConfig - 获取工作项类型字段配置",
            "url": "/zh/yunxiao/developer-reference/getworkitemtypefieldconfig",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/estimated-hours",
        "id": 2870669,
        "nodeType": 8,
        "title": "预计工时",
        "url": "/zh/yunxiao/developer-reference/estimated-hours/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listestimatedefforts",
            "id": 2870675,
            "nodeType": 1,
            "title": "ListEstimatedEfforts - 获取预计工时明细",
            "url": "/zh/yunxiao/developer-reference/listestimatedefforts",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createestimatedeffort",
            "id": 2870679,
            "nodeType": 1,
            "title": "CreateEstimatedEffort - 登记预计工时",
            "url": "/zh/yunxiao/developer-reference/createestimatedeffort",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateestimatedeffort",
            "id": 2870689,
            "nodeType": 1,
            "title": "UpdateEstimatedEffort - 更新登记预计工时",
            "url": "/zh/yunxiao/developer-reference/updateestimatedeffort",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/actual-labor-hours",
        "id": 2870670,
        "nodeType": 8,
        "title": "实际工时",
        "url": "/zh/yunxiao/developer-reference/actual-labor-hours/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listeffortrecords",
            "id": 2870692,
            "nodeType": 1,
            "title": "ListEffortRecords - 获取实际工时明细",
            "url": "/zh/yunxiao/developer-reference/listeffortrecords",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createeffortrecord",
            "id": 2870697,
            "nodeType": 1,
            "title": "CreateEffortRecord - 登记实际工时",
            "url": "/zh/yunxiao/developer-reference/createeffortrecord",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateeffortrecord",
            "id": 2870705,
            "nodeType": 1,
            "title": "UpdateEffortRecord - 更新登记实际工时",
            "url": "/zh/yunxiao/developer-reference/updateeffortrecord",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/work-item-workflow",
        "id": 3019365,
        "nodeType": 8,
        "title": "工作项工作流",
        "url": "/zh/yunxiao/developer-reference/work-item-workflow/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/getworkitemworkflow-get-a-list-of-the-status-of-the-work-item",
            "id": 3024916,
            "nodeType": 1,
            "title": "GetWorkitemWorkflow - 获取工作项工作流的状态列表",
            "url": "/zh/yunxiao/developer-reference/getworkitemworkflow-get-a-list-of-the-status-of-the-work-item",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getworkitemworkflowinfo-get-work-item-workflow-information",
            "id": 3025388,
            "nodeType": 1,
            "title": "GetWorkitemWorkflowInfo - 获取工作项工作流信息",
            "url": "/zh/yunxiao/developer-reference/getworkitemworkflowinfo-get-work-item-workflow-information",
            "validDocument": true
          }
        ]
      }
    ]
  },
  {
    "alias": "/yunxiao/developer-reference/assembly-line",
    "id": 2854216,
    "nodeType": 8,
    "title": "流水线",
    "url": "/zh/yunxiao/developer-reference/assembly-line/",
    "validDocument": false,
    "children": [
      {
        "alias": "/yunxiao/developer-reference/host-deployment",
        "id": 2854223,
        "nodeType": 8,
        "title": "主机部署",
        "url": "/zh/yunxiao/developer-reference/host-deployment/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/getvmdeploymachinelog",
            "id": 2854278,
            "nodeType": 1,
            "title": "GetVMDeployMachineLog - 查询机器部署日志",
            "url": "/zh/yunxiao/developer-reference/getvmdeploymachinelog",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getvmdeployorder",
            "id": 2854279,
            "nodeType": 1,
            "title": "GetVMDeployOrder - 获取部署单详情",
            "url": "/zh/yunxiao/developer-reference/getvmdeployorder",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/resumevmdeployorder",
            "id": 2854280,
            "nodeType": 1,
            "title": "ResumeVMDeployOrder - 继续部署单运行",
            "url": "/zh/yunxiao/developer-reference/resumevmdeployorder",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/retryvmdeploymachine",
            "id": 2854281,
            "nodeType": 1,
            "title": "RetryVMDeployMachine - 重试机器部署",
            "url": "/zh/yunxiao/developer-reference/retryvmdeploymachine",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/skipvmdeploymachine",
            "id": 2854282,
            "nodeType": 1,
            "title": "SkipVMDeployMachine - 跳过机器部署",
            "url": "/zh/yunxiao/developer-reference/skipvmdeploymachine",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/stopvmdeployorder",
            "id": 2854283,
            "nodeType": 1,
            "title": "StopVMDeployOrder - 终止机器部署",
            "url": "/zh/yunxiao/developer-reference/stopvmdeployorder",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/assembly-line-api",
        "id": 2854217,
        "nodeType": 8,
        "title": "流水线",
        "url": "/zh/yunxiao/developer-reference/assembly-line-api/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createpipeline-create-pipeline",
            "id": 2854228,
            "nodeType": 1,
            "title": "CreatePipeline - 创建流水线",
            "url": "/zh/yunxiao/developer-reference/createpipeline-create-pipeline",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletepipeline-delete-pipeline",
            "id": 2854229,
            "nodeType": 1,
            "title": "DeletePipeline - 删除流水线",
            "url": "/zh/yunxiao/developer-reference/deletepipeline-delete-pipeline",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipeline-get-pipeline-details",
            "id": 2854230,
            "nodeType": 1,
            "title": "GetPipeline - 获取流水线详情",
            "url": "/zh/yunxiao/developer-reference/getpipeline-get-pipeline-details",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listpipelines-get-a-list-of-pipelines",
            "id": 2854231,
            "nodeType": 1,
            "title": "ListPipelines - 获取流水线列表",
            "url": "/zh/yunxiao/developer-reference/listpipelines-get-a-list-of-pipelines",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatepipeline-update-pipeline",
            "id": 2854232,
            "nodeType": 1,
            "title": "UpdatePipeline - 更新流水线",
            "url": "/zh/yunxiao/developer-reference/updatepipeline-update-pipeline",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletepipelinerelations",
            "id": 2867072,
            "nodeType": 1,
            "title": "DeletePipelineRelations - 删除流水线关联",
            "url": "/zh/yunxiao/developer-reference/deletepipelinerelations",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatepipelinebaseinfo",
            "id": 2867071,
            "nodeType": 1,
            "title": "UpdatePipelineBaseInfo - 更新流水线基本信息",
            "url": "/zh/yunxiao/developer-reference/updatepipelinebaseinfo",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/addpipelinerelations",
            "id": 2867070,
            "nodeType": 1,
            "title": "AddPipelineRelations - 添加流水线关联",
            "url": "/zh/yunxiao/developer-reference/addpipelinerelations",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelineartifacturl",
            "id": 2867068,
            "nodeType": 1,
            "title": "GetPipelineArtifactUrl - 获取流水线构建产物下载地址",
            "url": "/zh/yunxiao/developer-reference/getpipelineartifacturl",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelineemasartifacturl",
            "id": 2867066,
            "nodeType": 1,
            "title": "GetPipelineEmasArtifactUrl - 获取流水线 emas 构建产物临时下载地址",
            "url": "/zh/yunxiao/developer-reference/getpipelineemasartifacturl",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listpipelinejobhistorys",
            "id": 2867065,
            "nodeType": 1,
            "title": "ListPipelineJobHistorys - 获取流水线任务的执行历史",
            "url": "/zh/yunxiao/developer-reference/listpipelinejobhistorys",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listpipelinejobs",
            "id": 2867058,
            "nodeType": 1,
            "title": "ListPipelineJobs - 按任务分类获取流水线执行的任务",
            "url": "/zh/yunxiao/developer-reference/listpipelinejobs",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listpipelinerelations",
            "id": 2867061,
            "nodeType": 1,
            "title": "ListPipelineRelations - 获取流水线关联列表",
            "url": "/zh/yunxiao/developer-reference/listpipelinerelations",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelinescanreporturl",
            "id": 2879276,
            "nodeType": 1,
            "title": "GetPipelineScanReportUrl - 获取扫描报告下载链接",
            "url": "/zh/yunxiao/developer-reference/getpipelinescanreporturl",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/pipeline-running-tasks",
        "id": 2854224,
        "nodeType": 8,
        "title": "流水线运行任务",
        "url": "/zh/yunxiao/developer-reference/pipeline-running-tasks/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/executepipelinejobrun",
            "id": 2861850,
            "nodeType": 1,
            "title": "ExecutePipelineJobRun - 手动运行流水线任务",
            "url": "/zh/yunxiao/developer-reference/executepipelinejobrun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelinejobrunlog",
            "id": 2854292,
            "nodeType": 1,
            "title": "GetPipelineJobRunLog - 查询任务运行日志",
            "url": "/zh/yunxiao/developer-reference/getpipelinejobrunlog",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/passpipelinevalidate",
            "id": 2854291,
            "nodeType": 1,
            "title": "PassPipelineValidate - 通过人工卡点",
            "url": "/zh/yunxiao/developer-reference/passpipelinevalidate",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/refusepipelinevalidate",
            "id": 2854289,
            "nodeType": 1,
            "title": "RefusePipelineValidate - 拒绝人工卡点",
            "url": "/zh/yunxiao/developer-reference/refusepipelinevalidate",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/retrypipelinejobrun",
            "id": 2854293,
            "nodeType": 1,
            "title": "RetryPipelineJobRun - 重试流水线任务运行",
            "url": "/zh/yunxiao/developer-reference/retrypipelinejobrun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/skippipelinejobrun",
            "id": 2854290,
            "nodeType": 1,
            "title": "SkipPipelineJobRun - 跳过流水线任务运行",
            "url": "/zh/yunxiao/developer-reference/skippipelinejobrun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/stoppipelinejobrun",
            "id": 2854294,
            "nodeType": 1,
            "title": "StopPipelineJobRun - 终止流水线任务运行",
            "url": "/zh/yunxiao/developer-reference/stoppipelinejobrun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelinejobsteps",
            "id": 2862750,
            "nodeType": 1,
            "title": "GetPipelineJobSteps - 获取流水线任务步骤列表",
            "url": "/zh/yunxiao/developer-reference/getpipelinejobsteps",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/executepipipelinejobaction",
            "id": 2862751,
            "nodeType": 1,
            "title": "ExecutePipelineJobAction - 运行流水线任务后续 action",
            "url": "/zh/yunxiao/developer-reference/executepipipelinejobaction",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelinejobsteplog",
            "id": 2862757,
            "nodeType": 1,
            "title": "GetPipelineJobStepLog - 获取流水线任务步骤日志",
            "url": "/zh/yunxiao/developer-reference/getpipelinejobsteplog",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelinejobsteplogurl",
            "id": 2871977,
            "nodeType": 1,
            "title": "GetPipelineJobStepLogUrl - 获取流水线任务步骤日志下载地址",
            "url": "/zh/yunxiao/developer-reference/getpipelinejobsteplogurl",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/rerunpipelinejobrun-reruns-pipeline-tasks",
            "id": 3013060,
            "nodeType": 1,
            "title": "RerunPipelineJobRun - 重新运行流水线任务",
            "url": "/zh/yunxiao/developer-reference/rerunpipelinejobrun-reruns-pipeline-tasks",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/pipeline-running-instance",
        "id": 2854218,
        "nodeType": 8,
        "title": "流水线运行实例",
        "url": "/zh/yunxiao/developer-reference/pipeline-running-instance/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createpipelinerun",
            "id": 2854236,
            "nodeType": 1,
            "title": "CreatePipelineRun - 运行流水线",
            "url": "/zh/yunxiao/developer-reference/createpipelinerun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getlatestpipelinerun",
            "id": 2862749,
            "nodeType": 1,
            "title": "GetLatestPipelineRun - 获取最近一次流水线运行信息",
            "url": "/zh/yunxiao/developer-reference/getlatestpipelinerun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelinerun",
            "id": 2854237,
            "nodeType": 1,
            "title": "GetPipelineRun - 获取流水线运行实例",
            "url": "/zh/yunxiao/developer-reference/getpipelinerun",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listpipelineruns",
            "id": 2854238,
            "nodeType": 1,
            "title": "ListPipelineRuns - 获取流水线运行实例列表",
            "url": "/zh/yunxiao/developer-reference/listpipelineruns",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatepipelinerun",
            "id": 2854239,
            "nodeType": 1,
            "title": "UpdatePipelineRun - 终止流水线运行",
            "url": "/zh/yunxiao/developer-reference/updatepipelinerun",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/resource-members",
        "id": 2854219,
        "nodeType": 8,
        "title": "资源成员",
        "url": "/zh/yunxiao/developer-reference/resource-members/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createresourcemember",
            "id": 2854241,
            "nodeType": 1,
            "title": "CreateResourceMember - 插入资源成员",
            "url": "/zh/yunxiao/developer-reference/createresourcemember",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteresourcemember",
            "id": 2854244,
            "nodeType": 1,
            "title": "DeleteResourceMember - 删除资源成员",
            "url": "/zh/yunxiao/developer-reference/deleteresourcemember",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listresourcemembers",
            "id": 2854242,
            "nodeType": 1,
            "title": "ListResourceMembers - 获取资源成员列表",
            "url": "/zh/yunxiao/developer-reference/listresourcemembers",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateresourcemember",
            "id": 2854243,
            "nodeType": 1,
            "title": "UpdateResourceMember - 更新资源成员",
            "url": "/zh/yunxiao/developer-reference/updateresourcemember",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateresourceowner",
            "id": 2870024,
            "nodeType": 1,
            "title": "UpdateResourceOwner - 移交资源对象拥有者",
            "url": "/zh/yunxiao/developer-reference/updateresourceowner",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/service-connection",
        "id": 2861039,
        "nodeType": 8,
        "title": "服务连接",
        "url": "/zh/yunxiao/developer-reference/service-connection/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createserviceauth",
            "id": 2861041,
            "nodeType": 1,
            "title": "CreateServiceAuth - 创建服务授权",
            "url": "/zh/yunxiao/developer-reference/createserviceauth",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createserviceconnection",
            "id": 2861052,
            "nodeType": 1,
            "title": "CreateServiceConnection - 创建服务连接",
            "url": "/zh/yunxiao/developer-reference/createserviceconnection",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createservicecredential",
            "id": 2861053,
            "nodeType": 1,
            "title": "CreateServiceCredential - 创建服务证书",
            "url": "/zh/yunxiao/developer-reference/createservicecredential",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listserviceauths",
            "id": 2861054,
            "nodeType": 1,
            "title": "ListServiceAuths - 获取服务授权列表",
            "url": "/zh/yunxiao/developer-reference/listserviceauths",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listserviceconnections",
            "id": 2861055,
            "nodeType": 1,
            "title": "ListServiceConnections - 获取服务连接列表",
            "url": "/zh/yunxiao/developer-reference/listserviceconnections",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listservicecredentials",
            "id": 2861056,
            "nodeType": 1,
            "title": "ListServiceCredentials - 获取服务证书列表",
            "url": "/zh/yunxiao/developer-reference/listservicecredentials",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/variable-group-1",
        "id": 2861009,
        "nodeType": 8,
        "title": "变量组",
        "url": "/zh/yunxiao/developer-reference/variable-group-1/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createvariablegroup-create-a-variable-group",
            "id": 2861010,
            "nodeType": 1,
            "title": "CreateVariableGroup - 创建变量组",
            "url": "/zh/yunxiao/developer-reference/createvariablegroup-create-a-variable-group",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletevariablegroup-delete-a-variable-group",
            "id": 2861011,
            "nodeType": 1,
            "title": "DeleteVariableGroup - 删除变量组",
            "url": "/zh/yunxiao/developer-reference/deletevariablegroup-delete-a-variable-group",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getvariablegroup-get-variable-group",
            "id": 2861012,
            "nodeType": 1,
            "title": "GetVariableGroup - 获取变量组",
            "url": "/zh/yunxiao/developer-reference/getvariablegroup-get-variable-group",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listvariablegroups",
            "id": 2861013,
            "nodeType": 1,
            "title": "ListVariableGroups - 获取变量组列表",
            "url": "/zh/yunxiao/developer-reference/listvariablegroups",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatevariablegroup-update-variable-group",
            "id": 2861015,
            "nodeType": 1,
            "title": "UpdateVariableGroup - 更新变量组",
            "url": "/zh/yunxiao/developer-reference/updatevariablegroup-update-variable-group",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/host-group",
        "id": 2861003,
        "nodeType": 8,
        "title": "主机组",
        "url": "/zh/yunxiao/developer-reference/host-group/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createhostgroup",
            "id": 2861002,
            "nodeType": 1,
            "title": "CreateHostGroup - 创建主机组",
            "url": "/zh/yunxiao/developer-reference/createhostgroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletehostgroup",
            "id": 2861004,
            "nodeType": 1,
            "title": "DeleteHostGroup - 删除主机组",
            "url": "/zh/yunxiao/developer-reference/deletehostgroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/gethostgroup",
            "id": 2861005,
            "nodeType": 1,
            "title": "GetHostGroup - 获取主机组",
            "url": "/zh/yunxiao/developer-reference/gethostgroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listhostgroups",
            "id": 2861006,
            "nodeType": 1,
            "title": "ListHostGroups - 获取主机组列表",
            "url": "/zh/yunxiao/developer-reference/listhostgroups",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatehostgroup",
            "id": 2861007,
            "nodeType": 1,
            "title": "UpdateHostGroup - 更新主机组",
            "url": "/zh/yunxiao/developer-reference/updatehostgroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletemachinegroupmachines",
            "id": 2862752,
            "nodeType": 1,
            "title": "DeleteMachineGroupMachines - 删除主机组的机器",
            "url": "/zh/yunxiao/developer-reference/deletemachinegroupmachines",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/tag",
        "id": 2861066,
        "nodeType": 8,
        "title": "标签",
        "url": "/zh/yunxiao/developer-reference/tag/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createflowtag",
            "id": 2861068,
            "nodeType": 1,
            "title": "CreateFlowTag - 创建标签",
            "url": "/zh/yunxiao/developer-reference/createflowtag",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createflowtaggroup",
            "id": 2861069,
            "nodeType": 1,
            "title": "CreateFlowTagGroup - 创建标签分类",
            "url": "/zh/yunxiao/developer-reference/createflowtaggroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteflowtag",
            "id": 2861070,
            "nodeType": 1,
            "title": "DeleteFlowTag - 删除标签",
            "url": "/zh/yunxiao/developer-reference/deleteflowtag",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deleteflowtaggroup",
            "id": 2861071,
            "nodeType": 1,
            "title": "DeleteFlowTagGroup - 删除标签分类",
            "url": "/zh/yunxiao/developer-reference/deleteflowtaggroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getflowtaggroup",
            "id": 2861072,
            "nodeType": 1,
            "title": "GetFlowTagGroup - 获取标签分类",
            "url": "/zh/yunxiao/developer-reference/getflowtaggroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listflowtaggroups",
            "id": 2861073,
            "nodeType": 1,
            "title": "ListFlowTagGroups - 获取标签分类列表",
            "url": "/zh/yunxiao/developer-reference/listflowtaggroups",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateflowtag",
            "id": 2861074,
            "nodeType": 1,
            "title": "UpdateFlowTag - 更新标签",
            "url": "/zh/yunxiao/developer-reference/updateflowtag",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updateflowtaggroup",
            "id": 2861075,
            "nodeType": 1,
            "title": "UpdateFlowTagGroup - 更新标签分类",
            "url": "/zh/yunxiao/developer-reference/updateflowtaggroup",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/pipeline-group",
        "id": 2861103,
        "nodeType": 8,
        "title": "流水线分组",
        "url": "/zh/yunxiao/developer-reference/pipeline-group/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/addtopipelinegroup",
            "id": 2861104,
            "nodeType": 1,
            "title": "AddToPipelineGroup - 将流水线加入流水线分组",
            "url": "/zh/yunxiao/developer-reference/addtopipelinegroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/createpipelinegroup",
            "id": 2861105,
            "nodeType": 1,
            "title": "CreatePipelineGroup - 创建流水线分组",
            "url": "/zh/yunxiao/developer-reference/createpipelinegroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletepipelinegroup",
            "id": 2861106,
            "nodeType": 1,
            "title": "DeletePipelineGroup - 删除流水线分组",
            "url": "/zh/yunxiao/developer-reference/deletepipelinegroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/getpipelinegroup",
            "id": 2861108,
            "nodeType": 1,
            "title": "GetPipelineGroup - 获取流水线分组",
            "url": "/zh/yunxiao/developer-reference/getpipelinegroup",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listpipelinegrouppipelines",
            "id": 2861110,
            "nodeType": 1,
            "title": "ListPipelineGroupPipelines - 获取流水线分组下流水线列表",
            "url": "/zh/yunxiao/developer-reference/listpipelinegrouppipelines",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listpipelinegroups",
            "id": 2861111,
            "nodeType": 1,
            "title": "ListPipelineGroups - 获取流水线分组列表",
            "url": "/zh/yunxiao/developer-reference/listpipelinegroups",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatepipelinegroup",
            "id": 2861112,
            "nodeType": 1,
            "title": "UpdatePipelineGroup - 更新流水线分组",
            "url": "/zh/yunxiao/developer-reference/updatepipelinegroup",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/kubernetes-cluster",
        "id": 2870022,
        "nodeType": 8,
        "title": "Kubernetes集群",
        "url": "/zh/yunxiao/developer-reference/kubernetes-cluster/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/updatekuberneteskubeconfig",
            "id": 2870023,
            "nodeType": 1,
            "title": "UpdateKubernetesKubeConfig - 更新 kubernetes 集群名称，配置文件",
            "url": "/zh/yunxiao/developer-reference/updatekuberneteskubeconfig",
            "validDocument": true
          }
        ]
      }
    ]
  },
  {
    "alias": "/yunxiao/developer-reference/testhub",
    "id": 2872578,
    "nodeType": 8,
    "title": "测试管理",
    "url": "/zh/yunxiao/developer-reference/testhub/",
    "validDocument": false,
    "children": [
      {
        "alias": "/yunxiao/developer-reference/test-cases",
        "id": 2872579,
        "nodeType": 8,
        "title": "测试用例",
        "url": "/zh/yunxiao/developer-reference/test-cases/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createtestcase",
            "id": 2872580,
            "nodeType": 1,
            "title": "CreateTestCase - 创建测试用例",
            "url": "/zh/yunxiao/developer-reference/createtestcase",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/deletetestcase",
            "id": 2872583,
            "nodeType": 1,
            "title": "DeleteTestcase - 删除测试用例",
            "url": "/zh/yunxiao/developer-reference/deletetestcase",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/gettestcase",
            "id": 2872587,
            "nodeType": 1,
            "title": "GetTestCase - 获取测试用例信息",
            "url": "/zh/yunxiao/developer-reference/gettestcase",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/searchtestcases",
            "id": 2872588,
            "nodeType": 1,
            "title": "SearchTestCases - 搜索测试用例",
            "url": "/zh/yunxiao/developer-reference/searchtestcases",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatetestcase",
            "id": 2872592,
            "nodeType": 1,
            "title": "UpdateTestCase - 更新测试用例信息",
            "url": "/zh/yunxiao/developer-reference/updatetestcase",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/test-case-directories",
        "id": 2872593,
        "nodeType": 8,
        "title": "测试用例目录",
        "url": "/zh/yunxiao/developer-reference/test-case-directories/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/createdirectory",
            "id": 2872594,
            "nodeType": 1,
            "title": "CreateDirectory - 创建测试用例目录",
            "url": "/zh/yunxiao/developer-reference/createdirectory",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/listdirectories",
            "id": 2872595,
            "nodeType": 1,
            "title": "ListDirectories - 获取测试用例目录列表",
            "url": "/zh/yunxiao/developer-reference/listdirectories",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/test-case-field-configuration",
        "id": 2872597,
        "nodeType": 8,
        "title": "测试用例字段配置",
        "url": "/zh/yunxiao/developer-reference/test-case-field-configuration/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/gettestcasefieldconfig",
            "id": 2872600,
            "nodeType": 1,
            "title": "GetTestcaseFieldConfig - 获取测试用例字段配置",
            "url": "/zh/yunxiao/developer-reference/gettestcasefieldconfig",
            "validDocument": true
          }
        ]
      },
      {
        "alias": "/yunxiao/developer-reference/test-plan",
        "id": 2982224,
        "nodeType": 8,
        "title": "测试计划",
        "url": "/zh/yunxiao/developer-reference/test-plan/",
        "validDocument": false,
        "children": [
          {
            "alias": "/yunxiao/developer-reference/listtestplan-get-a-list-of-test-plans",
            "id": 2982225,
            "nodeType": 1,
            "title": "ListTestPlan - 获取测试计划列表",
            "url": "/zh/yunxiao/developer-reference/listtestplan-get-a-list-of-test-plans",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/gettestresultlist-get-the-list-of-test-cases-in-the-test-plan",
            "id": 3001508,
            "nodeType": 1,
            "title": "GetTestResultList - 获取测试计划中测试用例列表",
            "url": "/zh/yunxiao/developer-reference/gettestresultlist-get-the-list-of-test-cases-in-the-test-plan",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/gettestplanresultdirectorylist-get-a-list-of-test-plan-results-directories",
            "id": 3017479,
            "nodeType": 1,
            "title": "GetTestPlanResultDirectoryList - 获取测试计划结果目录列表",
            "url": "/zh/yunxiao/developer-reference/gettestplanresultdirectorylist-get-a-list-of-test-plan-results-directories",
            "validDocument": true
          },
          {
            "alias": "/yunxiao/developer-reference/updatetestresult",
            "id": 2872602,
            "nodeType": 1,
            "title": "UpdateTestResult - 更新测试结果",
            "url": "/zh/yunxiao/developer-reference/updatetestresult",
            "validDocument": true
          }
        ]
      }
    ]
  }
];
