/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
  NO_CLUSTER_TIP: 'Please add at least 1 cluster',
  NO_CLUSTER_TIP_DESC:
    'A cluster is a group of nodes (physical or virtual machines) running Kubernetes, and the function of Kubesphere also depends on the nodes in the cluster.',
  ADD_NEW_CLUSTER_DESC: 'Add a new Kubernetes cluster',
  CHOOSE_PROVIDER_DESC:
    'KubeSphere provides a solution for quickly deploying Kubernetes clusters among mainstream service providers',

  VISIBILITY_PART: 'Partially Visible',
  VISIBILITY_PUBLIC: 'Public',

  MULTI_CLUSTER: 'Multi-Cluster',

  IMPORT_CLUSTER_DESC: 'Import an existing Kubernetes cluster',

  CLUSTER_SETTINGS_DESC: 'Define cluster configuration information',
  CLUSTER_TAG: 'Tag',
  CLUSTER_TAG_DESC:
    'To indicate what the cluster is used for, such as a production environment, testing environment or demo environment',
  CLUSTER_PROVIDER_DESC: 'The cluster infrastructure provider',
  CLUSTER_CONNECT_METHOD_DESC: 'Directly connect to the cluster or use a agent',

  CONNTECT_DIRECT: 'Direct connection to Kubernetes cluster',
  CONNTECT_PROXY: 'Cluster connection agent',

  CLUSTER_WAITING_JOIN_DESC:
    'There are currently no nodes available, the cluster is unusable, you can add the following configuration file to enable the cluster',

  CLUSTER_AGENT_TIP_1:
    'Please create a file named agent.yaml in the target cluster via SSH',
  CLUSTER_AGENT_TIP_1_DESC:
    'For example <span class="code">vi agent.yaml</span>',
  CLUSTER_AGENT_TIP_2: 'Copy the following configuration file to agent.yaml',
  CLUSTER_AGENT_TIP_2_DESC:
    'The agent file can connect the target cluster to the platform',
  CLUSTER_AGENT_TIP_3:
    'Execute in command line  <span class="code">kubectl create -f agent.yaml</span>',
  CLUSTER_AGENT_TIP_3_DESC:
    'After executing the command, wait for the update of the cluster status',

  CLUSTER_CONDITIONS: 'Cluster Conditions',

  INVITE_CLUSTER_MEMBER_DESC: 'You can invite new members to this cluster',

  SELECT_CLUSTERS_DESC: 'Select the clusters available in the workspace',

  CLUSTER_API_SERVER_TITLE: 'Kubesphere API Server to be added to the cluster',
  CLUSTER_API_SERVER_DESC:
    'You need to input the KubeSphere API Server address to be added to the cluster',

  INPUT_KUBECONFIG: 'Please fill in the KubeConfig of the target cluster',

  CLUSTER_DIRECT_IMPORT_TIP:
    'KubeSphere 多集群控制平面通过提供的 kubeconfig 和暴露 kubesphere apiserver 地址来连接导入集群，此种方式要求当前集群能够通过 kubeconfig 中的 server 地址和 kubesphere apiserver 地址直接访问待导入集群</br></br>通常适用于:</br>1. 当前集群和待导入集群在同一内网网络中</br>2. 当前集群和待导入集群已通过vpn或隧道等其它技术连通所在网络</br>3. kubeconfig 的 server 地址和 kubesphere apiserver 地址可以通过公网访问',
  CLUSTER_AGENT_IMPORT_TIP:
    'KubeSphere 控制平面通过代理方式连接待导入集群，控制平面启动一个公开的代理服务，待导入集群创建相应的客户端组件连接代理服务，与控制平面之间建立一个反向代理。此种方式不需要待导入集群和控制平面在同一网络，也不要求待导入集群暴露集群的 apiserver 地址，但会有一定的网络性能损耗</br></br>通常适用于:</br>1. 当前集群和待导入集群不在同一网络中<br/>2. 当前集群和待导入集群无法通过vpn或隧道等其它技术连通所在网络<br/>3. 对集群间网络性能损耗能容忍',

  HOW_TO_GET_KUBECONFIG: 'How to get KubeConfig?',

  CLUSTER_BASE_INFO_DESC:
    'This module summarizes the basic information of the current cluster.',

  UNBIND_CLUSTER_DESC:
    'After the cluster is unbound, KubeSphere will be unable to manage the cluster and Kubernetes resources within the cluster will not be deleted.',
  SURE_TO_UNBIND_CLUSTER: 'I confirm I want to unbind the cluster.',

  AUTHORIZE_CLUSTER_TO_WORKSPACE_DESC:
    'Clusters can be assigned to workspaces through authorization.',

  PUBLIC_CLUSTER_DESC:
    'A public cluster means all platform users can access the cluster, in which they are able to create and schedule resources.',

  CLUSTER_AUTHORIZATION_DESC:
    'Clusters can be assigned to workspaces through authorization.',

  CLUSTER_VISIBILITY_Q1: 'How to authorize clusters to specific workspaces?',
  CLUSTER_VISIBILITY_A1: '',
  CLUSTER_VISIBILITY_Q2: 'What is a public cluster?',
  CLUSTER_VISIBILITY_A2:
    'A public cluster means all platform users can access the cluster, in which they are able to create and schedule resources.',
}