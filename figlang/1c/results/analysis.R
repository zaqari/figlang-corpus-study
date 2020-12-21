
# worker = worker; 
#row = utterance #
#speaker = child or father
#selection = 0 for literal, 1 for definitely non-literal, 2= unsure
#ground-truth = 0 for literal, 1 for non-literal
#child-directed = I don't know what this is, but it doesn't matter for our purposes

setwd("~/git/figlang-corpus-study/figlang/1c/results/")

d = read.csv("raw-1221.csv",header=T)

d$rating = NA
d[d$selection==0,]$rating = 0 #literal
d[d$selection==2,]$rating = 1 #unsure
d[d$selection==1,]$rating = 2 #non-literal

d$obs = 1

counts = aggregate(obs~row,FUN=sum,data=d)

d$num_obs = counts$obs[match(d$row,counts$row)]

d4 = d[d$num_obs>3,]

agg = aggregate(rating~row+ground.truth+num_obs,FUN=mean,data=d4)

length(unique(d4$row)) # total number of rows with 4+ annotations = 460
nrow(agg[agg$ground.truth==1,]) # number of ground-truth non-literals = 26
nrow(agg[agg$ground.truth==1&agg$rating>0,]) # number of ground-truth non-literals that get at least one "unsure" or "non-literal" = 25
nrow(agg[agg$rating>0,]) # total number of rows that get at least one "unsure" or "non-literal" = 249
nrow(agg[agg$ground.truth==0&agg$rating==0,]) # number of ground-truth literals that only get "literal" = 210

