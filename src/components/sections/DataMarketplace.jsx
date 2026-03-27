import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Shield, Clock, Fingerprint, ArrowRight, RefreshCw, Map, Layers, Filter, LayoutGrid, Download, Settings, Eye, Cloud, Check, X, Database, User, Calendar, FileText, AlertCircle, TrendingUp } from 'lucide-react';

const bfsiAssets = [
    { name: "{ } retail_banking_kyc_profiles_v2.json", type: "JSON", size: "1.2 GB", catalog: "Retail Banking", appName: "Customer Onboarding", source: "Unstructured Data", srcColor: "blue", date: "24/03/2026", recordId: "1207" },
    { name: "< > wealth_management_portfolios.xml", type: "XML", size: "840 MB", catalog: "Wealth Mgmt", appName: "Portfolio Analyzer", source: "S3 Data Lake", srcColor: "purple", date: "24/03/2026", recordId: "1206" },
    { name: "{ } transaction_clearing_logs.json", type: "JSON", size: "4.5 GB", catalog: "Payments", appName: "Payment Gateway", source: "Kafka Stream", srcColor: "emerald", date: "24/03/2026", recordId: "1205" },
    { name: "    mortgage_underwriting_final.pdf", type: "PDF", size: "18 MB", catalog: "Lending Dept", appName: "Loan Origination", source: "Unstructured Data", srcColor: "blue", date: "24/03/2026", recordId: "1200" },
    { name: "< > corporate_loan_agreements_swift.xml", type: "XML", size: "320 MB", catalog: "Corporate Bank", appName: "Core Banking Sys", source: "Message Queue", srcColor: "amber", date: "24/03/2026", recordId: "1199" },
    { name: "[ ] high_net_worth_client_data.csv", type: "CSV", size: "85 MB", catalog: "Private Banking", appName: "CRM Platform", source: "SharePoint Sync", srcColor: "cyan", date: "23/03/2026", recordId: "1198" },
    { name: "    cross_border_remittance_batch.dat", type: "DAT", size: "2.1 GB", catalog: "Payments Core", appName: "Forex Engine", source: "Mainframe Dump", srcColor: "slate", date: "23/03/2026", recordId: "1197" }
];

const sourceColors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    cyan: "bg-cyan-50 text-cyan-600 border-cyan-100",
    slate: "bg-slate-50 text-slate-600 border-slate-100"
};

const typeColors = {
    JSON: "bg-amber-50 text-amber-700 border-amber-200",
    XML: "bg-blue-50 text-blue-700 border-blue-200",
    PDF: "bg-red-50 text-red-700 border-red-200",
    CSV: "bg-emerald-50 text-emerald-700 border-emerald-200",
    DAT: "bg-gray-50 text-gray-700 border-gray-200",
};

const AssetRow = ({ name, type, appName, source, srcColor, onView }) => (
    <div className="grid grid-cols-[250px_60px_140px_130px_80px] gap-4 py-3 px-5 hover:bg-slate-50 border-b border-gray-100 transition-colors items-center text-[12px] bg-white">
        
        <div className="flex items-center gap-2">
            <span 
                onClick={onView}
                className="font-semibold text-gray-800 tracking-tight truncate hover:text-blue-600 transition-colors cursor-pointer text-[13px]"
            >
                {name}
            </span>
        </div>
        
        <div>
            <span className={`px-2 py-0.5 rounded border font-bold shadow-sm text-[10px] tracking-widest uppercase ${typeColors[type] || "bg-white border-gray-200 text-gray-500"}`}>
                {type}
            </span>
        </div>
        
        <div className="text-gray-600 font-medium pr-2 leading-tight truncate">
            {appName}
        </div>
        
        <div>
            <span className={`px-2.5 py-1 rounded border font-bold text-[10px] tracking-wide truncate inline-block max-w-[130px] shadow-sm ${sourceColors[srcColor] || "bg-blue-50 text-blue-600 border-blue-100"}`}>
                {source}
            </span>
        </div>
        
        <div className="flex items-center gap-2 justify-end">
            <button 
                onClick={onView}
                className="px-3 py-1.5 rounded border border-blue-200 text-blue-600 hover:bg-blue-50 flex items-center gap-1.5 text-[10px] font-bold transition-colors bg-white shadow-sm tracking-widest uppercase"
            >
                <Eye className="w-3.5 h-3.5 text-blue-400" /> View
            </button>
        </div>
    </div>
);

const MetadataCard = ({ label, value }) => (
    <div className="bg-white border border-gray-100 rounded-lg p-3.5 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{label}</div>
        <div className="text-[13px] font-semibold text-slate-700 break-all leading-tight">{value}</div>
    </div>
);

const DataAssetModal = ({ asset, isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('TECHNICAL METADATA');
    
    if (!isOpen) return null;

    const tabs = ['TECHNICAL METADATA', 'OPERATIONAL METADATA', 'BUSINESS METADATA', 'COLUMNS & PII', 'DATA PROFILING'];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{asset?.name}</h3>
                                <div className="flex gap-2 mt-2">
                                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest">{asset?.type}</span>
                                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest">{asset?.catalog}</span>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-slate-400" />
                            </button>
                        </div>

                        {/* Modal Tabs */}
                        <div className="px-6 border-b border-gray-100 bg-white flex overflow-x-auto hide-scrollbar shrink-0">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-4 text-[11px] font-bold tracking-widest uppercase border-b-2 transition-all whitespace-nowrap ${
                                        activeTab === tab 
                                        ? 'border-blue-500 text-blue-600' 
                                        : 'border-transparent text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto p-8 bg-gray-50/30">
                            {activeTab === 'TECHNICAL METADATA' && (
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-slate-800">Technical Metadata</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <MetadataCard label="Asset ID" value="azure_blob_Test_Azure_Files_e2e_parquet_20260130_115222_folder_5mb..." />
                                        <MetadataCard label="Last Modified" value="30/01/2026, 11:52:57" />
                                        <MetadataCard label="Creation Time" value="30/01/2026, 17:22:56" />
                                        <MetadataCard label="Type" value="Azure Blob Storage" />
                                        <MetadataCard label="Size" value={asset?.size} />
                                        <MetadataCard label="Format" value={asset?.type} />
                                        <MetadataCard label="Access Tier" value="Hot" />
                                        <MetadataCard label="ETAG" value="0x8DE5FF61C3CEE19" />
                                        <MetadataCard label="Content Type" value="application/octet-stream" />
                                        <MetadataCard label="Location" value={`e2e_parquet_20260130_115222/folder/${asset?.catalog.toLowerCase()}`} />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'OPERATIONAL METADATA' && (
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-slate-800">Operational Metadata</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <MetadataCard label="Last Access" value="Today, 09:12 AM" />
                                        <MetadataCard label="30-Day Read Ops" value="1.2k" />
                                        <MetadataCard label="30-Day Write Ops" value="45" />
                                        <MetadataCard label="Top User" value="john.doe@torro.ai" />
                                        <MetadataCard label="DQ Score" value="98.5%" />
                                        <MetadataCard label="Refresh Frequency" value="Daily at 05:00 UTC" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'BUSINESS METADATA' && (
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-slate-800">Business Metadata</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                        <MetadataCard label="Data Owner" value={`${asset?.catalog} Department`} />
                                        <MetadataCard label="Sensitivity" value="Confidential (PII)" />
                                        <MetadataCard label="Data Steward" value="stewart_compliance_v2" />
                                        <MetadataCard label="Terms of Use" value="Internal analysis only. Do not export PII." />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'COLUMNS & PII' && (
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-slate-800">Columns & PII Discovery</h4>
                                    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-gray-100">
                                                    <th className="px-6 py-3">Column Name</th>
                                                    <th className="px-6 py-3">Type</th>
                                                    <th className="px-6 py-3">PII Status</th>
                                                    <th className="px-6 py-3">Masking</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50 text-[13px]">
                                                {[
                                                    { name: 'customer_id', type: 'string', pii: 'None', masking: 'Plaintext' },
                                                    { name: 'credit_card_hash', type: 'string', pii: 'Detected', masking: 'SHA-256 Masked', alert: true },
                                                    { name: 'ssn_last_4', type: 'integer', pii: 'Potential', masking: 'Partial Mask', warning: true },
                                                    { name: 'full_name', type: 'string', pii: 'Detected', masking: 'Redacted', alert: true },
                                                    { name: 'email_address', type: 'string', pii: 'Detected', masking: 'Redacted', alert: true }
                                                ].map((col) => (
                                                    <tr key={col.name}>
                                                        <td className="px-6 py-4 font-semibold text-slate-700">{col.name}</td>
                                                        <td className="px-6 py-4 text-slate-500 italic">{col.type}</td>
                                                        <td className="px-6 py-4">
                                                            {col.pii === 'Detected' ? (
                                                                <span className="font-bold text-red-500 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Detected</span>
                                                            ) : col.pii === 'Potential' ? (
                                                                <span className="font-bold text-orange-500 flex items-center gap-2">Potential</span>
                                                            ) : (
                                                                <span className="text-gray-400">None</span>
                                                            )}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {col.masking !== 'Plaintext' ? (
                                                                <span className={`font-bold flex items-center gap-2 ${col.masking === 'Redacted' ? 'text-slate-800' : 'text-green-600'}`}>
                                                                    <Check className="w-4 h-4" /> {col.masking}
                                                                </span>
                                                            ) : (
                                                                <span className="text-gray-400">{col.masking}</span>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'DATA PROFILING' && (
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-slate-800">Data Profiling Insights</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <MetadataCard label="Row Count" value="1,240,568" />
                                        <MetadataCard label="Null Count" value="452 (0.04%)" />
                                        <MetadataCard label="Uniqueness" value="99.98%" />
                                        <MetadataCard label="Fill Rate" value="99.99%" />
                                    </div>
                                    <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-[12px] font-bold text-slate-800">Value Distribution - Top Values</div>
                                            <TrendingUp className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                { label: 'Category_A', value: 85 },
                                                { label: 'Category_B', value: 70 },
                                                { label: 'Category_C', value: 55 },
                                                { label: 'Other', value: 30 }
                                            ].map((item) => (
                                                <div key={item.label} className="space-y-1">
                                                    <div className="flex justify-between text-[11px] font-medium text-slate-500">
                                                        <span>{item.label}</span>
                                                        <span>{item.value}%</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                        <div className="h-full bg-blue-500" style={{ width: `${item.value}%` }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 border-t border-gray-100 flex justify-end bg-white shrink-0">
                            <button onClick={onClose} className="px-6 py-2 rounded-lg border border-gray-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors uppercase tracking-widest">
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const DataMarketplace = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);

    return (
        <section className="py-32 bg-gray-50/50 relative overflow-hidden" id="marketplace">
            {/* Global Gradient Definition for Lucide Icons */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="torroIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ff2079" />
                    </linearGradient>
                </defs>
            </svg>
            
            <div className="w-full max-w-[120rem] px-4 md:px-8 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
                    
                    {/* Narrative Left */}
                    <div className="w-full lg:w-[45%] xl:w-[42%] shrink-0 space-y-12 flex flex-col justify-center my-auto items-start text-left">
                        <div className="w-full">
                            <span className="text-[13px] font-bold text-blue-600 uppercase tracking-[0.15em] mb-5 block text-left">
                                DATA EXCHANGE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8 text-left">
                                Frictionless <span className="text-slate-500">Access.</span>
                            </h2>
                            <p className="text-gray-500 text-[19px] text-left mx-0 leading-[1.8] font-normal max-w-[540px]">
                                Empower your analysts with a unified, self-service catalog. Torro's engine dynamically maps complex schemas, rewrites queries, and masks PII payloads on the fly—ensuring absolute compliance without crushing productivity.
                            </p>
                        </div>
                        <div className="space-y-3 pt-2">
                            {[
                                { icon: Clock, label: "Zero wait times for approvals" },
                                { icon: Shield, label: "Dynamic payload masking" },
                                { icon: Fingerprint, label: "Identity-aware access routing" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 cursor-pointer">
                                    <div className="w-[48px] h-[48px] rounded-[16px] bg-white border-[1.5px] border-slate-50 flex items-center justify-center shrink-0 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all group relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-6px_rgba(0,0,0,0.1)] hover:border-[#ff2079]/20">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff2079]/5 to-[#fbbf24]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        {/* Simple Icon (Default State) */}
                                        <item.icon 
                                            className="w-[22px] h-[22px] transition-all duration-300 absolute group-hover:opacity-0 group-hover:scale-95"
                                            stroke="#94a3b8"
                                            strokeWidth={1.5}
                                        />
                                        {/* Gradient Icon (Hover State) */}
                                        <item.icon 
                                            className="w-[22px] h-[22px] transition-all duration-300 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-105"
                                            stroke="url(#torroIconGradient)"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <span className="text-[14px] font-bold text-slate-800 transition-colors uppercase tracking-[0.1em]">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <button className="flex items-center gap-2 text-[16px] font-bold text-[#ff2079] hover:text-[#e01968] hover:translate-x-1 transition-all mt-4 pt-4 inline-flex w-max">
                            Explore Secure Integration <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>

                    {/* Hyper-Realistic Dashboard Replica Right */}
                    <div className="w-full lg:w-[50%] xl:w-[48%] overflow-x-auto pb-8 hide-scrollbar pt-2 flex">
                        <div className="w-max border border-gray-200 rounded-xl bg-white overflow-hidden relative z-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                            
                            {/* Torro Enterprise Top Branding Header (Dark Blue) */}
                            <div className="bg-[#4b55b2] text-white px-4 py-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col gap-1 pr-4 border-r border-white/20 cursor-pointer">
                                        <div className="w-3.5 h-[1.5px] bg-white rounded-full" />
                                        <div className="w-3.5 h-[1.5px] bg-white rounded-full" />
                                        <div className="w-3.5 h-[1.5px] bg-white rounded-full" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1 items-end h-[18px]">
                                            <div className="w-[5px] h-2.5 bg-[#ff2079] rounded-full" />
                                            <div className="w-[5px] h-[18px] bg-yellow-400 rounded-full" />
                                            <div className="w-[5px] h-[12px] bg-[#fbbf24] rounded-full opacity-80" />
                                        </div>
                                        <div className="leading-tight">
                                            <div className="font-extrabold tracking-widest text-[13px]">TORRO ENTERPRISE</div>
                                            <div className="text-[8px] text-indigo-100 tracking-widest uppercase font-semibold">Torro OneData Platform</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1 bg-white/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-[9px] font-bold tracking-widest uppercase text-green-50">System Online</span>
                                </div>
                            </div>

                            {/* Filters Toolbar */}
                            <div className="px-6 py-3 border-b border-gray-100 bg-gray-50/30 flex items-center justify-between z-0">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md shrink-0 w-[220px] shadow-sm bg-white focus-within:border-blue-300 focus-within:ring-2 ring-blue-100 transition-all">
                                        <Search className="w-3.5 h-3.5 text-gray-400" />
                                        <input type="text" placeholder="Search assets..." className="bg-transparent border-none outline-none text-[11px] w-full text-gray-700 placeholder:text-gray-400" disabled />
                                    </div>
                                    
                                    <div className="h-5 w-px bg-gray-200 mx-1" />
                                    
                                    <button className="px-3 py-1.5 rounded-md text-gray-600 font-semibold text-[11px] flex items-center gap-2 shrink-0 border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-colors">
                                        All Types <Filter className="w-3 h-3 text-gray-400" />
                                    </button>
                                    
                                    <button className="px-3 py-1.5 rounded-md text-gray-400 font-medium text-[11px] flex items-center gap-1.5 shrink-0 border border-transparent hover:text-gray-600 hover:bg-gray-100 transition-colors">
                                        <X className="w-3.5 h-3.5" /> Clear
                                    </button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="px-3 py-1.5 rounded-md text-gray-600 font-semibold text-[11px] flex items-center gap-1.5 shrink-0 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-colors">
                                        <LayoutGrid className="w-3.5 h-3.5 text-gray-400" /> By App
                                    </button>
                                    <button className="px-3 py-1.5 rounded bg-[#0c8ce9] text-white font-bold text-[10px] shadow-md tracking-wider flex items-center gap-1.5 hover:bg-blue-600 transition-colors uppercase border border-transparent hover:border-blue-500">
                                        <Download className="w-3.5 h-3.5" /> Export CSV
                                    </button>
                                </div>
                            </div>

                            {/* Table Header */}
                            <div className="grid grid-cols-[250px_60px_140px_130px_80px] gap-4 px-5 py-3 border-b border-gray-200 bg-gray-50/50 text-[10px] font-extrabold text-gray-800 uppercase tracking-widest items-center">
                                <div>Name</div>
                                <div>Type</div>
                                <div>App Name</div>
                                <div>Data Source</div>
                                <div className="text-right pr-2">Actions</div>
                            </div>
                            
                            {/* Table Body */}
                            <div className="bg-white">
                                {bfsiAssets.map((asset, i) => (
                                    <AssetRow 
                                        key={i} 
                                        index={i+1} 
                                        {...asset} 
                                        onView={() => {
                                            setSelectedAsset(asset);
                                            setIsModalOpen(true);
                                        }}
                                    />
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Asset Detail Modal */}
            <DataAssetModal 
                asset={selectedAsset} 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
};

export default DataMarketplace;
